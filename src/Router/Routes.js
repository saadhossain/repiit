import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Checkout from "../Pages/Checkout";
import Login from "../Pages/Login";
import Orders from "../Pages/Orders";
import Register from "../Pages/Register";
import Shop from "../Pages/Shop";
import PrivateRouter from "./PrivateRouter";

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Shop></Shop>},
            {
                path:'/checkout/:id',
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`),
                element: <Checkout></Checkout>
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
                path: '/orders',
                element: <PrivateRouter> <Orders></Orders> </PrivateRouter>
            }
        ]
    }
])