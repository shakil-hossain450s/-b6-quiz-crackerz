import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Option from '../Option/Option';
import { EyeIcon } from '@heroicons/react/24/solid';

const Question = ({ example }) => {
    const { correctAnswer, id, options, question } = example;

    const [correctAns, setCorrectAns] = useState([]);
    const handleToSetCorrectAns = correct => {
        setCorrectAns(correct);
        toast.success(`Right Answer: ${correctAnswer}`, { autoClose: 500, position: 'top-center' })
    }

    function removeTags(str) {
        if ((str === null) || (str === ''))
            return false;
        else
            str = str.toString();
        return str.replace(/(<([^>]+)>)/ig, '');
    }

    return (
        <div className='bg-white p-5 rounded-lg shadow-2xl relative'>
            <EyeIcon onClick={() => handleToSetCorrectAns(correctAnswer)}
                className='w-5 h-5 absolute top-2 right-5 cursor-pointer'></EyeIcon>
            <h2 className='text-xl font-medium'>Question: {removeTags(question)}</h2>
            <div className='grid lg:grid-cols-2 gap-5 mt-5'>
                {
                    options.map(option => <Option
                        option={option}
                        id={id}
                        correctAnswer={correctAnswer}
                    ></Option>)
                }
                <h4 className='text-start ml-10 text-xl'>
                    Right Answer: <span className='font-semibold'>{correctAns}</span>
                </h4>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Question;