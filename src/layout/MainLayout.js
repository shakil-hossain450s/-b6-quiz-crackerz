import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../components/Header/Header';

export const QuizContext = createContext([]);

const MainLayout = () => {
    const quizes = useLoaderData().data;
    return (
        <QuizContext.Provider value={quizes}>
            <Header></Header>
            <Outlet></Outlet>
        </QuizContext.Provider>
    );
};

export default MainLayout;