import React, { useContext } from 'react';
import { QuizContext } from '../../layout/MainLayout';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statics = () => {
    const topics = useContext(QuizContext);
    const { id, name, total } = topics;
    return (
        <div className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <h2 className='text-4xl font-semibold mb-8'>The Chart Is Here</h2>
                <BarChart
                    width={400}
                    height={400}
                    data={topics}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey='id' />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#8884d8" />
                </BarChart>
            </div>
        </div>
    );
};

export default Statics;