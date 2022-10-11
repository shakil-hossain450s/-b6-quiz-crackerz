import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "./ErrorPage/ErrorPage";
import Home from "./Home/Home";
import TopicDetail from "./TopicDetail/TopicDetail";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            {
                path: '/quiz/:quizId',
                loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
                element: <TopicDetail></TopicDetail>
            }
        ]
    }
]);