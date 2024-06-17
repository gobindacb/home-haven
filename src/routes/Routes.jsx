import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/Error/ErrorPage";
import Profile from "../pages/Profile/Profile";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import EstateDetails from "../components/Estate/EstateDetails";
import About from "../pages/About/About";
import ProtectedRoute from "../components/PrivateRoute/ProtectedRoute";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/estate.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/estate/:id',
                element: <ProtectedRoute>
                    <EstateDetails></EstateDetails>
                    </ProtectedRoute>,
                loader: () => fetch('/estate.json')
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }
]);

export default routes;
