import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../components/Header/Header';

export const QuizContext = createContext([]);
export const NameContext = createContext([]);

const MainLayout = () => {
    const quizes = useLoaderData().data;
    const [names, setNames] = useState([]);
    return (
        <QuizContext.Provider value={quizes}>
            <NameContext.Provider value={[names, setNames]}>
                <Header></Header>
                <Outlet></Outlet>
            </NameContext.Provider>
        </QuizContext.Provider>
    );
};

export default MainLayout;