import React from 'react';

const Blog = () => {
    return (
        <div className='mt-8 mx-5'>
            <h2 className='text-4xl font-semibold'>This is Blog</h2>
            <div className='my-5'>
                <div tabIndex="0" className="lg:w-1/2 mx-auto collapse collapse-arrow border-2 border-gray-300 bg-base-100 rounded-box shadow-md my-5">
                    <div className="collapse-title text-xl font-medium">
                        <h3>What is the Purpose of React Router???</h3>
                    </div>
                    <div className="collapse-content">
                        <hr className='mb-3 border border-gray-300' />
                        <p>
                            React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL
                        </p>
                    </div>
                </div>
                <div tabIndex="0" className="lg:w-1/2 mx-auto collapse collapse-arrow border-2  my-5 border-gray-300 bg-base-100 rounded-box shadow-md">
                    <div className="collapse-title text-xl font-medium">
                        <h3>How Does Context API Works???</h3>
                    </div>
                    <div className="collapse-content">
                        <hr className='mb-3 border border-gray-300' />
                        <p>
                            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                        </p>
                    </div>
                </div>
                <div tabIndex="0" className="lg:w-1/2 mx-auto collapse collapse-arrow border-2 border-gray-300 bg-base-100 rounded-box shadow-md">
                    <div className="collapse-title text-xl font-medium">
                        <h3>useRef Hook Details.</h3>
                    </div>
                    <div className="collapse-content">
                        <hr className='mb-3 border border-gray-300' />
                        <p>
                            The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;