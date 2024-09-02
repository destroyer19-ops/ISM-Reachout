import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const countryCodes = [
    { code: "+1", country: "United States" },
    { code: "+44", country: "United Kingdom" },
    { code: "+234", country: "Nigeria" },
    { code: "+91", country: "India" },
    { code: "+61", country: "Australia" },
    // Add more country codes as needed
];

const AuthModal = ({ isOpen, onClose }) => {
    const [loginOption, setLoginOption] = useState('email');
    const [selectedCountryCode, setSelectedCountryCode] = useState(countryCodes[0].code);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation check
        if (inputValue.trim() === '') {
            await Swal.fire({
                title: 'Error!',
                text: 'Missing fields',
                icon: 'error',
                confirmButtonText: 'Cool'
            });
            return;
        }

        // Successful submission
        await Swal.fire({
            title: 'Success!',
            text: `Form submitted successfully with ${loginOption === 'email' ? 'Email' : 'Phone Number'}.`,
            icon: 'success',
            confirmButtonText: 'Great'
        });

        // Reset the form (optional)
        setInputValue('');
        onClose(); // Close the modal after submission (optional)
    };

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={onClose}
        >
            <motion.div 
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg w-full max-w-md p-6"
                onClick={(e) => e.stopPropagation()} // Prevent click events on modal content from propagating to the backdrop
            >
                {/* Modal Header */}
                <div className="flex justify-between items-center border-b pb-3">
                    <h3 className="text-lg font-medium text-center w-full">Register/Confirm Registration</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                {/* Modal Body */}
                <form onSubmit={handleSubmit} className="mt-5 text-center">
                    <h2 className="text-xl font-bold">Begin Here</h2>
                    <p className="text-gray-500 mt-2">INSERT YOUR EMAIL ADDRESS TO ACCESS</p>

                    <div className="mt-5">
                        <p className="text-gray-600 mb-2">Choose Login Option:</p>
                        <div className="flex justify-center space-x-4">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    onChange={() => setLoginOption('email')}
                                    checked={loginOption === 'email'}
                                    name="loginOption"
                                />
                                <span className="ml-2">Use Email</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    onChange={() => setLoginOption('phone')}
                                    checked={loginOption === 'phone'}
                                    name="loginOption"
                                />
                                <span className="ml-2">Use Phone Number</span>
                            </label>
                        </div>
                    </div>

                    <div className="mt-5">
                        {loginOption === 'phone' && (
                            <div className="flex flex-col">
                                <select
                                    value={selectedCountryCode}
                                    onChange={(e) => setSelectedCountryCode(e.target.value)}
                                    className="px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none mb-5 focus:ring-blue-500 focus:border-blue-500"
                                >
                                    {countryCodes.map((country, index) => (
                                        <option key={index} value={country.code}>
                                            {country.code} - {country.country}
                                        </option>
                                    ))}
                                </select> 
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        )}

                        {loginOption === 'email' && (
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        )}
                    </div>

                    <div className="mt-5">
                        <button
                            type="submit"
                            className="w-full py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        >
                            Submit {loginOption === 'email' ? 'Email' : 'Phone Number'}
                        </button>
                    </div>
                    <div className="mt-5">
                        <button
                            type="button"
                            onClick={onClose}
                            className="w-full py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                            Close This
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default AuthModal;
