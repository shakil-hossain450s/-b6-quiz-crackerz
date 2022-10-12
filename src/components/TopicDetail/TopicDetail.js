import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { NameContext } from '../../layout/MainLayout';
import Question from '../Question/Question';

const TopicDetail = () => {
    const quizeDetails = useLoaderData().data;
    const { questions } = quizeDetails;
    const [names] = useContext(NameContext);

    return (
        <div className='grid grid-cols-1 w-4/6 mx-auto gap-12 my-8'>
            <h2 className='font-semibold text-3xl'>Question Of: {names}</h2>
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