import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const TopicDetail = () => {
    const quizeDetails = useLoaderData().data;
    const { questions } = quizeDetails;

    console.log(questions.length);



    return (
        <div className='grid grid-cols-1 w-4/6 mx-auto gap-12 my-8'>
            {
                questions.map(example => <Question
                    key={example.id}
                    example={example}
                ></Question>)
            }
        </div>
    );
};

export default TopicDetail;