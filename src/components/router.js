import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "./Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> }
        ]
    }
]);