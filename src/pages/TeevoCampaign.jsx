import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import CampaignCard from '../components/CampaignCard'

const TeevoCampaign = () => {
  return (
    <>
        <div className='mx-28 mt-20 mb-10 shadow-lg rounded-xl'>
            <div className='mb-4'>
                {/* Image */}
                <img className='rounded-sm w-auto h-[80vh] object-contain' src="https://rhapsodyofrealities.b-cdn.net/reachoutworld/rowd_site_updates/Teevo.jpg" alt="teens-teevolution" srcset="" />
            </div>

            <div className='flex flex-col lg:flex-row gap-8 p-6'>
                <div className='flex-1'>
                    <h5 className='uppercase font-bold text-center text-[#545153] text-xl mb-6'>Teens Teevolution </h5>
                    <div className='text-[#343a40]'>
                    <p className='font-normal leading-7 text-base mb-4'>
                        One key material the Lord has prepared to reach and impact the lives of teenagers all around the world is the Rhapsody Of Realities TeeVo Devotional and The Rhapsody Of Realities TeeVo Bible. With over 1.2 billion teenagers/adolescents, these materials are designed to inspire, encourage, and strengthen every teenager with answers from God’s Word to questions of critical concern, thereby enabling them discover their true purpose while programming them for a life of outstanding success.                         </p>

                        <p className='font-normal leading-7 text-base mb-6'>
                        The Reach Out World TeeVolution Campaign is permeating nations, cities, towns, streets, and schools impacting the lives of teenagers and preparing them for the rapture of the church through the sponsorship of the monthly free distribution of the TeeVo Devotional to every teenager as well as ensuring every single teenager owns a TeeVo Bible.
                                                </p>
                                                <button className='rounded-md bg-[#ea0606] hover:bg-[#d00404] active:bg-[#bb0505] py-1 text-xs px-10 leading-6 font-semibold uppercase tracking-tighter text-white'>
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
                        <Link to='https://maps.reachoutworld.org/' className='rounded-md bg-[#cb0c9f] hover:bg-[#ad0a87] active:bg-[#a20a7f] py-2 px-6 leading-6 font-bold text-xs uppercase tracking-tighter text-white'>
                            Explore Map
                        </Link>
                    </div>
                </div>
            </div>

        </div>
        <CampaignCard/>
        <Footer/>
    </>
  )
}

export default TeevoCampaign