import React from 'react';
import Option from '../Option/Option';

const Question = ({ example }) => {
    const { correctAnswer, id, options, question } = example;
    return (
        <div className='bg-white p-5 rounded-lg shadow-2xl'>
            <h2>Question: {question}</h2>
            <div className='grid lg:grid-cols-2 gap-5 mt-5'>
                {
                    options.map(option => <Option
                        key={option.id}
                        option={option}
                    ></Option>)
                }
            </div>
        </div>
    );
};

export default Question;