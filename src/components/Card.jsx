import React from 'react';
// import { motion } from 'framer-motion';
import { AiFillLike } from 'react-icons/ai';
import { IoCalendar, IoChatbubbles, IoEye } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Card = ({ image, title, content, link, button }) => {
    return (

        <div className="relative bg-white h-full rounded-lg mb-5 group overflow-hidden transform transition-transform px-7 duration-300">
            <img className="w-full h-auto overflow-hidden object-contain rounded-lg shadow-xl transform transition-transform group-hover:scale-105 duration-300" src={image} alt={title} />
            {/* <div className="absolute inset-0 bg-gray-300"></div> */}
            <div className="relative">
                <h5 className="text-xl font-semibold pt-6 text-textHeadingColor mb-2">{title}</h5>
                <p className="text-textColor  mb-4 text-sm">{content}</p>

                <Link
                    to={link}
                    className="inline-block bg-white border-[1px] border-btnPrimary hover:scale-105 text-btnPrimary font-semibold text-sm py-1 px-10 rounded-md transition-all duration-300 ease-in-out"
                >
                    {button}
                </Link>
            </div>
        </div>
    );
};

export default Card;
