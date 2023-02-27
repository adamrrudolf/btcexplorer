import React from 'react';
import { Link } from 'react-router-dom';


export const Header = () => {
    return (
        <header className="bg-gray-800">
            <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">Bitcoin Explorer</span>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <Link to="/" className={`
                            block mt-4 lg:inline-block
                            lg:mt-0 text-teal-200 hover:text-white mr-4`}>
                            Home
                        </Link>
                        <Link to="/block" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Block
                        </Link>
                        <Link to="/tx" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Transaction
                        </Link>
                        <Link to="/address" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                            Address
                        </Link>
                    </div>
                    <div>
                        <a href="#" className={`inline-block text-sm px-4 py-2 leading-none border
                                    rounded text-white border-white hover:border-transparent
                                    hover:text-teal-500 hover:bg-white mt-4 lg:mt-0`}>Download</a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

