import React from 'react'
import { Link } from 'react-router-dom'

const LanguageCard = () => {
    return (
        <div className='grid grid-cols-1 mx-5 rounded-xl lg:mx-28 md:grid-cols-2 py-5 shadow-lg bg-white h-full w-auto mb-5'>
            <div className="relative bg-white h-full rounded-lg mb-5 group overflow-hidden transform transition-transform px-7 duration-300">
                <img className="w-full h-auto overflow-hidden object-contain rounded-lg shadow-xl transform transition-transform group-hover:scale-105 duration-300" src="https://christembassy-ism.org/ui/newsletters/img/temp_img4.jpg" alt='' />
                {/* <div className="absolute inset-0 bg-gray-300"></div> */}
                <div className="relative">
                    <Link to="https://give.rhapsodyofrealities.org/">
                        <h5 className="text-xl font-semibold pt-6 text-textHeadingColor mb-2">
                            Rhapsody of Realities in 8,123 languages and 4,000 dialects!
                        </h5>
                    </Link>
                    <p className="text-textColor  mb-4 text-sm">
                        Every language, a treasure. Join us, as we continue to make the daily devotional available to more people in the language of their hearts.
                        Sponsor the free distribution of Rhapsody of Realities any language of your choice!
                    </p>

                    <Link
                        to='https://give.rhapsodyofrealities.org/'
                        className="inline-block bg-white border-[1px] border-btnPrimary hover:scale-105 text-btnPrimary font-semibold text-sm py-1 px-10 rounded-md transition-all duration-300 ease-in-out"
                    >
                        LEARN MORE
                    </Link>
                </div>
            </div>
            <div className="relative bg-white h-full rounded-lg mb-5 group overflow-hidden transform transition-transform px-7 duration-300">
                <img className="w-full h-auto overflow-hidden object-contain rounded-lg shadow-xl transform transition-transform group-hover:scale-105 duration-300" src='https://christembassy-ism.org/ui/newsletters/img/temp_img4.jpg' alt='' />
                {/* <div className="absolute inset-0 bg-gray-300"></div> */}
                <div className="relative">
                    <Link to="https://give.rhapsodyofrealities.org/">
                        <h5 className="text-xl font-semibold pt-6 text-textHeadingColor mb-2">
                            About Rhapsody of Realities
                        </h5>
                    </Link>
                    <p className="text-textColor  mb-4 text-sm">

                        Rhapsody of Realities daily devotional is a life guide, designed to enhance your spiritual growth and development by bringing you a fresh perspective from God’s Word every day.

                    </p>

                    <Link
                        to='https://give.rhapsodyofrealities.org/'
                        className="inline-block bg-white border-[1px] border-btnPrimary hover:scale-105 text-btnPrimary font-semibold text-sm py-1 px-10 rounded-md transition-all duration-300 ease-in-out"
                    >
                        LEARN MORE
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LanguageCard