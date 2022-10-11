import React from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ option, handleToShowAns }) => {
    return (
        <div>
            <NavLink className={`w-full text-[18px] font-medium pl-12 py-8 h-28 border-2 border-indigo-400 rounded-lg text-start flex items-center hover:bg-indigo-300 hover:text-white duration-150 ${({ isActive }) => isActive ? 'bg-indigo-300' : undefined}`}>
                {option}
            </NavLink>
            <ToastContainer />
        </div>
    );
};

export default Option;


// className='w-full text-[18px] font-medium pl-12 py-8 h-28 border-2 border-indigo-400 rounded-lg text-start flex items-center hover:bg-indigo-300 hover:text-white duration-150'