import { Link, NavLink } from "react-router-dom";
import userProfileImage from '../../assets/user.png';
import logo from '../../assets/logo.png'
import UseAuth from "../../hooks/UseAuth";


const Navbar = () => {
    const profileImage = userProfileImage;
    const { logout, user } = UseAuth([])
    // console.log("email of user", user.photoURL);
    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/career'>Career</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/profile'>Profile</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link><img className="w-1/2" src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip tooltip-left" data-tip={user?.displayName}>
                    {
                        user ? (
                        <div className="w-10 rounded-full" >
                        <button><img alt="userProfileImage" src={user?.photoURL} /></button>
                    </div>
                    ) : (
                    <div className="w-10 rounded-full" >
                    <button><img alt="userProfileImage" src={profileImage} /></button>
                </div> )
                    }
                </div>
                {
                    user ?
                        <button onClick={logout} className="btn btn-primary">Log Out</button> :
                        <Link to='/login'><button className="btn btn-secondary">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;