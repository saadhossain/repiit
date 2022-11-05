import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Shop from "../Pages/Shop";

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <Shop></Shop>},
            {}
        ]
    }
])