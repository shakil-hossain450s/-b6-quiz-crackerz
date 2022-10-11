import React from 'react';

const Option = ({ option }) => {
    return (
        <div>
            <p
                className='pl-12 py-8 h-28  border-2 border-indigo-400 rounded-lg text-start shadow-sm p-3 flex items-center'
            >{option}</p>
        </div>
    );
};

export default Option;