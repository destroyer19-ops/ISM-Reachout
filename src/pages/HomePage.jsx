import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <>
        <div className='hero-bg w-full h-screen showcase'>
            <div class="showcase-content">
                <h1 className='mt-4 text-6xl font-extrabold text-balance'>REACHOUT  </h1>
                <h3>WORLD DAY WITH ISM</h3>
                <p>Pray, Plan and Participate.</p>
                <div className="flex mt-4">
            <Link to={`/`} className='bg-white hover:bg-white/80 text-black font-bold py-2 px-4 rounded mr-4 flex items-center'>
            Pray
            </Link>
            <Link to={`/`} className='bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded flex items-center'>
            Sponsor
            </Link>
          </div>
            </div>
        </div>
                    </>
    )
}

export default HomePage