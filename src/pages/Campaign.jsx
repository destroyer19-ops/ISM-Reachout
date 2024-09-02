import React from 'react'
import Footer from '../components/Footer'
import LanguageCard from '../components/LanguageCard'
import CampaignCard from '../components/CampaignCard'

const Campaign = () => {
  return (
    <div className='mt-10'>
      <CampaignCard/>
      <LanguageCard/>
        <Footer/>
    </div>
  )
}

export default Campaign