import React from 'react';
import { toast } from 'react-toastify';
import Option from '../Option/Option';

const Question = ({ example }) => {
    const { correctAnswer, id, options, question } = example;

    const handleToShowAns = () => {
        toast.success('Clicked', { autoClose: 500, position: 'top-center' })
    }

    return (
        <div className='bg-white p-5 rounded-lg shadow-2xl'>
            <h2 className='text-xl font-medium'>Question: {question}</h2>
            <div className='grid lg:grid-cols-2 gap-5 mt-5'>
                {
                    options.map(option => <Option
                        option={option}
                        id={id}
                        handleToShowAns={handleToShowAns}
                    ></Option>)
                }
            </div>
        </div>
    );
};

export default Question;