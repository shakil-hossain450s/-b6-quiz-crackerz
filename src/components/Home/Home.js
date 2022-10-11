import React, { useContext } from 'react';
import { QuizContext } from '../../layout/MainLayout';
import Topics from '../Topics/Topics';

const Home = () => {
    const quizes = useContext(QuizContext);
    return (
        <div className='mt-5'>
            <h2 className='text-4xl font-semibold'>Choose Your Quiz</h2>
            <p className='mt-4 text-[18px]'>
                Now you can develope your self by answering this quiz on Our Quiz Hunter Site. <br />
                You can develope your skill and thinking.
            </p>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 w-5/6 mx-auto my-8'>
                {
                    quizes.map(quiz => <Topics
                        key={quiz.id}
                        quiz={quiz}
                    ></Topics>)
                }
            </div>
        </div>
    );
};

export default Home;