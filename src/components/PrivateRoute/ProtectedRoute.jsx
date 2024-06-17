import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import Login from "../../pages/Login/Login";

const ProtectedRoute = ({children}) => {

    const {user, loading} = UseAuth();
    const location = useLocation();

   if(loading){
        return  <Login></Login>
           
    }

    if (!user){
        return <Navigate to='/login' state={location?.pathname || '/'}/>
    }
     
   
    return (
        <div>
            {children}
        </div>
    );
};

export default ProtectedRoute;