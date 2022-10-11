import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ option, handleToShowAns }) => {
    return (
        <div>
            <button onClick={handleToShowAns} className='w-full text-[18px] font-medium pl-12 py-8 h-28 border-2 border-indigo-400 rounded-lg text-start flex items-center hover:bg-indigo-300 hover:text-white duration-150'>
                {option}
            </button>
            <ToastContainer />
        </div>
    );
};

export default Option;


// className='w-full text-[18px] font-medium pl-12 py-8 h-28 border-2 border-indigo-400 rounded-lg text-start flex items-center hover:bg-indigo-300 hover:text-white duration-150'