import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthModal from './AuthModal'



const SignUpCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='mx-5 lg:mx-28 mt-5 z-20 shadow-xl rounded-xl mb-5 grid bg-white grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 '>
         <div className="relative bg-white h-full rounded-lg mb-5 group overflow-hidden transform transition-transform px-7 duration-300">
            <img className="w-full h-auto overflow-hidden object-contain rounded-lg shadow-xl transform transition-transform group-hover:scale-105 duration-300" src="https://rhapsodyofrealities.b-cdn.net/reachoutworld/rowd_site_updates/Signup.jpg" alt='Reachout World' />
            {/* <div className="absolute inset-0 bg-gray-300"></div> */}
            <div className="relative">
                <h5 className="text-xl font-semibold pt-6 text-textHeadingColor mb-2">SIGN-UP</h5>
                <p className="text-textColor  mb-4 text-sm">
                                                Be an active part of the largest global volunteer workforce for ReachOut World Day as you sign up to distribute, be a missionary and take up numerous other services.
                                            </p>

                <Link
                    onClick={() => setIsModalOpen(true)}
                    className="inline-block bg-btnPrimary hover:scale-105 text-white font-semibold text-sm py-1 px-10 rounded-md transition-all duration-300 ease-in-out"
                >SIGN-UP
                    {/* {button} */}
                </Link>

            </div>
        </div>
         <div className="relative bg-white h-full rounded-lg mb-5 group overflow-hidden transform transition-transform px-7 duration-300">
            <img className="w-full h-auto overflow-hidden object-contain rounded-lg shadow-xl transform transition-transform group-hover:scale-105 duration-300" src="https://rhapsodyofrealities.b-cdn.net/reachoutworld/rowd_site_updates/Enlist.jpg" alt='Reachout World' />
            {/* <div className="absolute inset-0 bg-gray-300"></div> */}
            <div className="relative">
                <h5 className="text-xl font-semibold pt-6 text-textHeadingColor mb-2">ENLIST SPONSORS</h5>
                <p className="text-textColor  mb-4 text-sm">
                                                Get others to join in. Enlist friends, family, colleagues, institutions, organizations and more to partner with us and send Rhapsody around the world
                                             </p>

                {/* <Link
                    to='/'
                    className="inline-block bg-white border-[1px] border-btnPrimary hover:scale-105 text-btnPrimary font-semibold text-sm py-1 px-10 rounded-md transition-all duration-300 ease-in-out"
                > */}
                    {/* {button} */}
                {/* </Link> */}
            </div>
        </div>
         <div className="relative bg-white h-full rounded-lg mb-5 group overflow-hidden transform transition-transform px-7 duration-300">
            <img className="w-full h-auto overflow-hidden object-contain rounded-lg shadow-xl transform transition-transform group-hover:scale-105 duration-300" src="https://rhapsodyofrealities.b-cdn.net/reachoutworld/rowd_site_updates/Mystreamspace2.jpg" alt='Reachout World' />
            {/* <div className="absolute inset-0 bg-gray-300"></div> */}
            <div className="relative">
                <h5 className="text-xl font-semibold pt-6 text-textHeadingColor mb-2">Mystreamspace</h5>
                <p className="text-textColor  mb-4 text-sm">
                                                Stay in control of your streaming experience; whether you want to stream your own prayer meetings, cells, fellowships, global programs, or discover live programs, there’s something for everyone. 
                                            </p>

                <Link
                    to='https://mystreamspace.org/'
                    className="inline-block bg-btnPrimary hover:scale-105 text-white font-semibold text-sm py-1 px-10 rounded-md transition-all duration-300 ease-in-out"
                > GET YOUR STREAMSPACE
                    {/* {button} */}
                </Link>
            </div>
        </div>
        <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default SignUpCard