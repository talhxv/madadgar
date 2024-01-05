import React from "react";
import {Link} from "react-router-dom";

export default function PopUp(onClose) {
    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-md bg-opacity-50 bg-gray-700">
                <div className="bg-white p-8 rounded-md shadow-md">
                    <h2 className="text-2xl font-Gilroy font-bold mb-4">Registration Successful</h2>
                    <Link to="/Login">
                        <button
                            type="submit"
                            className="w-full mx-auto text-white bg-[#02D1AC] hover:bg-[#01998B] focus:outline-none focus:ring-4 focus:ring-[#01998B] font-Gilroy font-semibold text-m rounded-full px-5 py-2.5 text-center dark:bg-[#02D1AC] dark:hover:bg-[#01998B] dark:focus:ring-[#01998B] drop-shadow-md"
                        >
                            Proceed to Sign In
                        </button>
                    </Link>
                </div>
            </div>

        </>
    );
}