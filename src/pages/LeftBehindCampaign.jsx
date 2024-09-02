import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import CampaignCard from '../components/CampaignCard'

const LeftBehindCampaign = () => {
    return (
        <>
            <div className='mx-4 lg:mx-28 mt-10 mb-10 shadow-lg rounded-xl'>
                <div className='mb-4'>
                    {/* Image */}
                    <img
                        className='w-full h-[40vh] md:h-[70vh] lg:h-[80vh] object-contain md:object-cover rounded-t-xl'
                        src="https://rhapsodyofrealities.b-cdn.net/reachoutworld/rowd_site_updates/No-One-Left-Behind.jpg"
                        alt="no-one-left-behind"
                    />
                </div>

                <div className='flex flex-col lg:flex-row gap-8 p-4 lg:p-6'>
                    <div className='flex-1'>
                        <h5 className='uppercase font-bold text-center text-[#545153] text-lg md:text-xl mb-4 lg:mb-6'>No One Left Behind</h5>
                        <div className='text-[#343a40]'>
                            <p className='font-normal leading-7 text-sm md:text-base mb-4'>
                                Everyone deserves access to God’s Word. Join in this global infiltration of the Gospel in every city, town, village, and country through the accountable distribution of God’s Word through the “ReachOut World”. The Messenger Angel, Rhapsody of Realities, is at the forefront of taking God’s Word to everyone, and to others who are unable to read the devotional.
                            </p>
                            <p className='font-normal leading-7 text-sm md:text-base mb-6'>
                                Join the No One Left Behind campaign to reach those with visual impairment and with hearing disabilities through Rhapsody of Realities in braille, audio, or sign language.
                            </p>
                            <button className='rounded-md bg-[#ea0606] hover:bg-[#d00404] active:bg-[#bb0505] py-2 px-4 text-xs md:text-sm leading-6 font-semibold uppercase tracking-tight text-white'>
                                Take Action
                            </button>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <img
                            src="https://rhapsodyofrealities.b-cdn.net/reachoutworld/tools/SEND%20A%20PARTNER-min.png"
                            alt="ReachOut World Map"
                            className='w-full h-auto mb-4 rounded-xl shadow-lg'
                        />
                        <div className='text-sm'>
                            <h5 className='text-lg font-semibold mb-2 text-[#344767]'>ReachOut World Maps</h5>
                            <p className='leading-6 mb-6 text-sm text-[#67748E]'>
                                Search, Give and Send-A-Partner. Send a Partner to a street of your choice and your sponsored copies of Rhapsody of Realities will be delivered there. Explore our intuitive map and follow the prompts.
                            </p>
                            <Link to='https://maps.reachoutworld.org/' className='rounded-md bg-[#cb0c9f] hover:bg-[#ad0a87] active:bg-[#a20a7f] py-2 px-4 text-xs md:text-sm leading-6 font-bold uppercase tracking-tight text-white'>
                                Explore Map
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <CampaignCard />
            <Footer />
        </>
    )
}

export default LeftBehindCampaign