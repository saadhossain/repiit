import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Checkout from "../Pages/Checkout";
import Shop from "../Pages/Shop";

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Shop></Shop>},
            {path:'/checkout', element: <Checkout></Checkout>}
        ]
    }
])