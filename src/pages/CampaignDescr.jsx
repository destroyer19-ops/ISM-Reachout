import React from 'react'
import { Link } from 'react-router-dom'
import Campaign from './Campaign'
import CampaignCard from '../components/CampaignCard'
import Footer from '../components/Footer'

const CampaignDescr = () => {
    return (
        <>
        <div className='mx-4 lg:mx-28 mt-5 md:mt-10 mb-10 shadow-lg rounded-xl'>
  <div className='mb-4'>
    {/* Image */}
    <img
      className='w-full h-[60vh] md:h-[70vh] lg:h-[80vh] object-contain md:object-cover rounded-t-xl'
      src="https://rhapsodyofrealities.b-cdn.net/reachoutworld/rowd_site_updates/Kids.jpg"
      alt="say-yes-to-kids"
    />
  </div>

  <div className='flex flex-col lg:flex-row gap-8 p-4 lg:p-6'>
    <div className='flex-1'>
      <h5 className='uppercase font-bold text-center text-[#545153] text-lg md:text-xl mb-4 lg:mb-6'>Say Yes to Kids</h5>
      <div className='text-[#343a40]'>
        <p className='font-normal leading-7 text-sm md:text-base mb-4'>
          Rhapsody of Realities isn’t your typical novel: It’s a classic love letter from God to every child, complete with a life message! The devotional is a life guide designed to boost the spiritual growth and development of children by providing them with a fresh perspective from God’s Word every day. Now, we are poised to reach 1.9 billion children with copies of Rhapsody of Realities for Kids and Rhapsody of Realities for Early Readers through our ReachOut World Say Yes to Kids Campaigns.
        </p>
        <p className='font-normal leading-7 text-sm md:text-base mb-6'>
          ReachOut World Say Yes to Kids Campaign is an evangelistic outreach focused on reaching children in every village, town, city, and nation in their languages with Rhapsody of Realities for Kids and Rhapsody of Realities for Early Readers in all available formats: Print copies, Digital formats, Animation videos, and on Radio.
        </p>
        <button className='rounded-md bg-[#ea0606] hover:bg-[#d00404] active:bg-[#bb0505] py-2 px-6 text-xs md:text-sm leading-6 font-semibold uppercase tracking-tight text-white'>
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
        <Link to='https://maps.reachoutworld.org/' className='rounded-md bg-[#cb0c9f] hover:bg-[#ad0a87] active:bg-[#a20a7f] py-2 px-4 md:py-2 md:px-6 text-xs md:text-sm leading-6 font-bold uppercase tracking-tight text-white'>
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

export default CampaignDescr