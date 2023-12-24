import React from 'react';
import logoImage from '../images/main.svg';
import {Link, useNavigate} from 'react-router-dom';
import {useState} from "react";
import axios from "axios";

export default function Login() {
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:3001/Login', { email, password })
            .then((result) => {
                console.log(result);
                const { success, user } = result.data;
                if (success) {
                    // Navigate to Home with state
                    navigate('/Home', { state: { user } });
                } else {
                    console.log("Login failed");
                    // Handle failed login, show error message, etc.
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 mt-36">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="m-auto h-30 w-auto"
                    src={logoImage}
                    alt="Your Company"
                />
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form
                    className="space-y-6"
                    action="#"
                    method="POST"
                >
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                        </label>
                        <div className="mt-2 font-Gilroy">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                placeholder="Email"
                                onChange={(e)=>{setEmail(e.target.value)}}
                                required
                                className="px-5 block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 drop-shadow-lg"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                            </label>
                            <div className="text-sm">
                                <a
                                    href="http://google.com"
                                    className="font-semibold font-Gilroy text-[#02D1AC] hover:text-[#02D1AC]"
                                >
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2 font-Gilroy">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Password"
                                onChange={(e)=>{setPassword(e.target.value)}}
                                autoComplete="current-password"
                                required
                                className="px-4 block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 drop-shadow-lg"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="w-full mx-auto text-white bg-[#02D1AC] hover:bg-[#01998B] focus:outline-none focus:ring-4 focus:ring-[#01998B] font-Gilroy font-semibold text-m rounded-full px-5 py-2.5 text-center dark:bg-[#02D1AC] dark:hover:bg-[#01998B] dark:focus:ring-[#01998B] drop-shadow-md"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center font-Gilroy text-sm text-gray-500">
                    Dont have an account yet?

                    <p
                        className="font-semibold font-Gilroy leading-6 text-[#02D1AC] hover:text-[#02D1AC]"
                    >
                        <Link to={"/Register"}>
                            Create right now
                        </Link>
                    </p>

                </p>
            </div>
        </div>
    );
}
