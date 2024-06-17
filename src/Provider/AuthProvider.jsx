import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const AuthContext = createContext(null);

// social auth providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    
    // create user
    const createUser = (email, password) =>{
        setLoading(true)
        toast.success('Register success')
        return createUserWithEmailAndPassword(auth, email, password)
    };

    //update user profile
    const updateUserProfile = (fullName, imageUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: fullName, 
            photoURL: imageUrl
          })
    };

    // edit profile
    const editProfile = (fullName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: fullName,
            photoURL: photoURL
        }) 
    }

    // sign in user
    const signInUser = (email, password) =>{
        setLoading(true)
        toast.success('login success')
        return signInWithEmailAndPassword(auth, email, password)
    };

    // google login
    const googleLogin = () =>{
        setLoading(true)
        toast.success('login success')
       return signInWithPopup(auth, googleProvider)
    }

    // github login
    const githubLogin = () =>{
        setLoading(true)
        toast.success('login success')
        return signInWithPopup(auth, githubProvider)
    }

    // twitter login
    const twitterLogin = () =>{
        setLoading(true)
        toast.success('login success')
        return signInWithPopup(auth, twitterProvider)
    }

    // logout
    const logout = () =>{
        setUser(null)
        toast.success('logout success')
        return signOut(auth)
    }

    // send reset email password
    const resetPass = (email) =>{
        return sendPasswordResetEmail(auth, email)
    }


    // observer
    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user)
             setLoading(false);
            } 
          });
            return () => unsubscribe()

    },[])

    const allValues ={
        createUser,
        user,
        signInUser,
        googleLogin,
        githubLogin,
        twitterLogin,
        logout,
        updateUserProfile,
        loading,
        resetPass,
        editProfile

    }
    return (
        <AuthContext.Provider value={allValues}>
           {children} 
           <ToastContainer />
        </AuthContext.Provider>
    );
};

export default AuthProvider;