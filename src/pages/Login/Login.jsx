import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin";
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import PasswordResetModal from "../../components/Modals/PasswordResetModal";
import { Helmet } from "react-helmet-async";
import logo from '../../assets/logo.png';
import {phoneSquare} from 'react-icons-kit/fa/phoneSquare';
import {facebookSquare} from 'react-icons-kit/fa/facebookSquare';
import {globe} from 'react-icons-kit/fa/globe'



const Login = () => {

    // navigation after login
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/'

    // for password toggle
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text');
        }
        else {
            setIcon(eyeOff);
            setType('password')
        }
    }

    const { signInUser } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const [errorMessage, setErrorMessage] = useState(""); // State to hold error message

    const onSubmit = (data) => {
        const { email, password } = data;

        signInUser(email, password)
            .then(result => {
                if (result.user) {
                    navigate(from);
                }

            })
            .catch(error => {
                setErrorMessage("Incorrect email or password."); // Set error message for incorrect login
                console.log(error.message);
            });
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>
                    Home Haven | Login
                </title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <div className="divider"><h3 className="text-7xl font-bold">Login</h3></div>
                    <div className="flex justify-center pt-5"><img className="w-1/2" src={logo} alt="" /></div>
                    <h3 className='text-lg my-4'>Home Haven is a real estate company. Since 1992 we provide more than 2300 home for our clients. Our main office in new york city.</h3>
                    <div className='divider'><h4 className='text-5xl text-center font-bold font-satisfy text-green-400'>You can find us on</h4></div>
                    <div className='flex items-center gap-3'>
                        <Icon icon={phoneSquare} size={44} />
                        <p className='text-xl'>+1 000 0001 0002</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Icon icon={facebookSquare} size={44} />
                        <p className='text-xl'>www.facebook/home-haven</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Icon icon={globe} size={44} />
                        <p className='text-xl'>https://home-haven-5998b.web.app</p>
                    </div>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-6">
                                <input type={type} placeholder="password" className="grow"
                                    {...register("password", { required: true })}
                                />
                                <span onClick={handleToggle}><Icon icon={icon} size={20} /></span>
                            </label>
                            {errors.password && <span className="text-red-500">This field is required</span>}
                            {errorMessage && <span className="text-red-500">{errorMessage}</span>} {/* Display error message */}
                            {/* modal */}
                            <PasswordResetModal></PasswordResetModal>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-center">Do not have an account? <Link className="text-green-500 underline" to='/register'>Register Now</Link></p>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Login;