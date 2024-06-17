import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center mt-56 gap-4">
            <h2 className="text-5xl text-red-600 text-center">Error: 404</h2>
            <Link to='/'><button className="btn btn-secondary">Go to Home</button></Link>
        </div>
    );
};

export default ErrorPage;