import React from 'react';
import logoImage from '../images/main.svg';
import {Link} from "react-router-dom";

export default function Landing() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 lg:px-8">
            <div className="mb-8 text-center">
                <img
                    className="mx-auto h-30 w-auto mb-2"
                    src={logoImage}
                    alt="Madadgaar"
                />
            </div>
            <div className="mb-2 w-4/5">
                <Link to="/Login">
                    <button
                        type="submit"
                        className="w-full mx-auto text-white bg-[#02D1AC] hover:bg-[#01998B] focus:outline-none focus:ring-4 focus:ring-[#01998B] font-Gilroy font-semibold text-m rounded-full px-5 py-2.5 text-center dark:bg-[#02D1AC] dark:hover:bg-[#01998B] dark:focus:ring-[#01998B] drop-shadow-lg"
                    >
                        Sign in
                    </button>
                </Link>
            </div>

            <div className="mb-2 w-4/5">
                <Link to="/Register">
                    <button
                        type="submit"
                        className="w-full mx-auto text-gray-500 bg-white hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-Gilroy font-semibold rounded-full text-sm px-5 py-2.5 text-center border border-gray-200 dark:hover:bg-gray-300 dark:focus:ring-gray-400 drop-shadow-md"
                    >
                        Sign up
                    </button>
                </Link>
            </div>
        </div>
    );
}
