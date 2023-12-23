import React, { useState } from 'react';
import PopUp from './PopUpConfirm';
import logoImage from '../images/main-ver.svg';
import insertImg from '../images/insert.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [phoneno, setPhoneNo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:3001/Register', { name, city, address, phoneno, email, password })
            .then((result) => {
                console.log(result);
                setShowPopup(true); // Show the popup after successful registration
            })
            .catch((err) => console.log(err));
    };

    const closePopup = () => {
        setShowPopup(false);
        // Add additional logic if needed
        navigate('/Login'); // Redirect to Login page after closing the popup
    };

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
            <div className="flex items-center mt-5 text-2xl font-semibold text-gray-900 dark:text-white">
                <img className="w-auto h-18" src={logoImage} alt="logo" />
            </div>

            <a href="#" className="flex items-center mt-4 mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img className="w-auto mt-2 h-28" src={insertImg} alt="logo" />
            </a>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <div className="mt-2">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Name"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            required
                            className="px-4 block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 font-Gilroy placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 drop-shadow-lg"
                        />
                    </div>
                    <div className="mt-2">
                        <input
                            id="city"
                            name="city"
                            type="text"
                            placeholder="City"
                            onChange={(e) => {
                                setCity(e.target.value);
                            }}
                            required
                            className="px-4 block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 font-Gilroy placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 drop-shadow-lg"
                        />
                    </div>
                    <div className="mt-2">
                        <input
                            id="address"
                            name="address"
                            type="address"
                            placeholder="Address"
                            onChange={(e) => {
                                setAddress(e.target.value);
                            }}
                            required
                            className="px-4 block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 font-Gilroy placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 drop-shadow-lg"
                        />
                    </div>
                    <div className="mt-2">
                        <input
                            id="phoneno"
                            name="phoneno"
                            type="number"
                            placeholder="Phone Number"
                            autoComplete="current-password"
                            onChange={(e) => {
                                setPhoneNo(e.target.value);
                            }}
                            required
                            className="px-4 block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 font-Gilroy placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 drop-shadow-lg"
                        />
                    </div>
                    <div>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                placeholder="Email"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                required
                                className="px-4 block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 font-Gilroy placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 drop-shadow-lg"
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
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            required
                            className="px-4 block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 font-Gilroy placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 drop-shadow-lg"
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
                            <label
                                htmlFor="terms"
                                className="font-light font-Gilroy text-[#02D1AC] dark:text-[#02D1AC]"
                            >
                                I accept the{' '}
                                <a
                                    className="font-semibold font-Gilroy hover:underline dark:text-primary-500"
                                    href="#"
                                >
                                    Terms and Conditions
                                </a>
                            </label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full mx-auto text-white bg-[#02D1AC] hover:bg-[#01998B] focus:outline-none focus:ring-4 focus:ring-[#01998B] font-semibold font-Gilroy text-m rounded-full px-5 py-2.5 text-center dark:bg-[#02D1AC] dark:hover:bg-[#01998B] dark:focus:ring-[#01998B] drop-shadow-md"
                    >
                        Register
                    </button>
                    <div className="flex items-center justify-center">
                        <p className="text-sm font-light font-Gilroy dark:text-gray-400">
                            Already have an account?{' '}
                            <span className="font-semibold font-Gilroy hover:underline dark:text-[#02D1AC]">
                <Link to="/Login">Login here</Link>
              </span>
                        </p>
                    </div>
                </form>
            </div>

            {showPopup && <PopUp onClose={closePopup} />}
        </div>
    );
}
