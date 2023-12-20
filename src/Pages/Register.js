import React from 'react';
import logoImage from '../images/main-ver.svg'
import insertImg from '../images/insert.svg'
export default function Register() {
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#"
               className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
                <img className="w-auto h-18"
                     src={logoImage}
                     alt="logo"/>
            </a>
            <h1 className="mb-5 font-bold"> Register your account</h1>
            <a href="#"
               className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img className="w-auto mt-2 h-28"
                     src={insertImg}
                     alt="logo"/>
            </a>
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <form className="space-y-4 md:space-y-6"
                          action="#">
                        <div>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="Email"
                                    required
                                    className="px-5 block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 drop-shadow-lg"
                                />
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Password"
                                autoComplete="current-password"
                                required
                                className="px-4 block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 drop-shadow-lg"
                            />
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Confirm Password"
                                autoComplete="current-password"
                                required
                                className="px-4 block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 drop-shadow-lg"
                            />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="terms"
                                    aria-describedby="terms"
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                    required
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="terms"
                                       className="font-light text-[#02D1AC] dark:text-[#02D1AC]">
                                    I accept
                                    the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                           href="#">Terms and Conditions</a>
                                </label>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full mx-auto text-white bg-[#02D1AC] hover:bg-[#01998B] focus:outline-none focus:ring-4 focus:ring-[#01998B] font-semibold text-m rounded-full px-5 py-2.5 text-center dark:bg-[#02D1AC] dark:hover:bg-[#01998B] dark:focus:ring-[#01998B] drop-shadow-md"
                        >
                            Register
                        </button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <a href="#"
                                                        className="font-medium text-[#02D1AC] hover:underline dark:text-[#02D1AC]">Login
                            here</a>
                        </p>
                    </form>
                </div>
        </div>
    );
}