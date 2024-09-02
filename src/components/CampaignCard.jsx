import React from 'react'
import Card2 from './Card2'

const CampaignCard = () => {
    const cardData = [
        {
            image: 'https://christembassy-ism.org/ui/newsletters/img/temp_img4.jpg',
            title: 'Say Yes to Kids',
            link: '/campaigns/say-yes-to-kids',
            content: `Join in this global infiltration of the Gospel in the children of every city, town, and village and country through God’s Word.`,
            button: 'LEARN MORE'
        },
        {
            image: 'https://christembassy-ism.org/ui/newsletters/img/temp_img4.jpg',
            title: 'Teens Teevolution',
            link: '/campaigns/teens-teevolution',
            content: `Rhapsody of Realities is a daily devotional that provides fresh insight into God's Word. On a regular basis, the daily devotional has an impact on the lives of many people! `,
            button: 'LEARN MORE'
        },
        {
            image: 'https://christembassy-ism.org/ui/newsletters/img/temp_img4.jpg',
            title: 'No One Left Behind',
            link: '/campaigns/no-one-left-behind',
            content: `
                                                The Rhapsody of Realities special edition is available in Braille. Leave no one behing through the sponsorship of the daily devotional for the visually impaired.
                                            `,
            button: 'LEARN MORE'
        }
    ]
    return (
        <div className='mx-5 lg:mx-28 pt-5 z-20 shadow-xl rounded-xl mb-5 grid bg-white grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 '>
            {cardData.map((card, index) => (
                <div
                    key={index}
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 1 }}

                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg overflow-hidden"
                >
                    <Card2
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

export default CampaignCard