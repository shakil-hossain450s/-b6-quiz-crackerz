import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/solid';
import './Header.css';
export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-white shadow-lg sticky top-0 right-0 z-20">
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <Link
                        to='/'
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center
                        px-5 py-2 rounded-md">
                        <span className="ml-2 text-xl font-bold bg-white tracking-wide text-black-100 p uppercase">
                            Quiz Hunter
                        </span>
                    </Link>
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        <li>
                            <NavLink
                                to='/home'
                                aria-label="Our product"
                                title="Our product"
                                className="font-medium tracking-wide text-black-100 px-5 py-2 rounded-md transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/statics"
                                aria-label="Our product"
                                title="Our product"
                                className={`font-medium tracking-wide text-black-100 px-5 py-2 rounded-md transition-colors duration-200 hover:text-teal-accent-400
                                ${({ isActive }) => isActive ? 'active' : undefined}`}
                            >
                                Statics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                aria-label="Our product"
                                title="Our product"
                                className="font-medium tracking-wide text-black-100 px-5 py-2 rounded-md transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Blog
                            </NavLink>
                        </li>
                    </ul>
                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <Bars3Icon className="h-8 w-8 text-gray-600 font-semibold"></Bars3Icon>

                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <Link
                                                to="/"
                                                aria-label="Company"
                                                title="Company"
                                                className="inline-flex items-center"
                                            >
                                                <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                    Company
                                                </span>
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-10">
                                            <li>
                                                <NavLink
                                                    to="/home"
                                                    aria-label="Home"
                                                    title="Home px-5 py-2 rounded-md"
                                                    className={`font-medium rounded-sm px-5 py-2 tracking-we text-black-100 p transition-colors duration-200 hover:text-teal-accent-400 ${({ isActive }) => isActive ? 'active' : undefined}`}
                                                >
                                                    Home
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/statics"
                                                    aria-label="Statics"
                                                    title="Statics px-5 py-2 rounded-md"
                                                    className="font-medium rounded-sm px-5 py-2 tracking-we text-black-100 p transition-colors duration-200 hover:text-teal-accent-400"
                                                >
                                                    Statics
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/blog"
                                                    aria-label="Blog"
                                                    title="Blog px-5 py-2 rounded-md"
                                                    className="font-medium rounded-sm px-5 py-2 tracking-we text-black-100 p transition-colors duration-200 hover:text-teal-accent-400"
                                                >
                                                    Blog
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div >
            </div >
        </div >
    );
};

export default Header;