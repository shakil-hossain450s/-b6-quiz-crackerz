import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Topics = ({ topic }) => {
    const { id, logo, name, total } = topic;
    return (
        <div className='border p-4 rounded-lg shadow-lg'>
            < img className='w-full border bg-gray-800 border-gray-300 border-2 rounded-lg' src={logo} alt="" />
            <div className='px-2 pt-2 relative'>
                <h3 className='text-start text-[16px] font-medium'>{name}</h3>
                <p className='text-start font-medium'>Total Quiz: <span className='font-semibold'>{total}</span></p>
                <Link>
                    <button
                        className='absolute bottom-0 right-1 bg-indigo-600 flex items-center justify-center text-white px-6 py-1 rounded-md hover:bg-indigo-800 duration-300'>
                        <span>Start</span>
                        <ArrowRightIcon className='h-4 w-4 font-bold ml-2 mt-1'></ArrowRightIcon>
                    </button>
                </Link>
            </div>
        </div >
    );
};

export default Topics;