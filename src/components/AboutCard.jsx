import React from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/Enlist.png'
import Card from './Card'
import SponsorModal from './SponsorModal'


const AboutCard = () => {
    const cardData = [
        {
            image: img1,
            title: 'REACHOUT WORLD DAY WITH PASTOR CHRIS',
            link: '', 
            content: `ReachOut World Day is "ReachOut 24/7"; it's a 24-hour period set aside to cover the whole world with Rhapsody of Realities in all known languages and dialects. Beyond reaching the whole world, over 7 billion people will be effectively discipled as they're engaged with Rhapsody of Realities in an accountable way.`,
            button: 'REGISTER NOW'
        },
        {
            image: img2,
            title: 'Pray EveryDay',
            link: 'https://1billionminutes.mystreamspace.org/', 
            content: `Join the formidable 1 Billion Minutes Prayer March to the ReachOut world day via 1billionminutes.mystreamspace.org`,
            button: 'PRAY NOW'
        },
        {
            image: img3,
            title: 'SPONSOR',
            link: '', 
            content: `Make copies of Rhapsody available in all languages and in all categories as you sponsor languages, sponsor street distribution, and sponsor the ReachOut World Day.`,
            button: 'SPONSOR'
        }
    ]
  return (
    <div className='mx-5 lg:mx-28 pt-5 z-20 shadow-xl rounded-xl mb-5 grid bg-white grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 '>
        {cardData.map((card, index) => (
            <div
            key={index}
            initial={{ opacity: 0, y: 0}}
            whileInView={{ opacity: 1, y: 1}}

            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg overflow-hidden"
          >
            <Card
              key={index}
              title={card.title}
              content={card.content}
              image={card.image}
              link={card.link}
              button={card.button}
            />
         </div>
          ))}
    </div>
  )
}

export default AboutCard