import React, { useState, useEffect } from 'react';
import AboutCard from '../components/AboutCard';
import languagebg from '../assets/languagebg.jpg';
// import languagebg2 from '../assets/img1.png';
import Slideshow from '../components/Slideshow';
import SignUpCard from '../components/SignUpCard';
import LanguageCard from '../components/LanguageCard';
import Footer from '../components/Footer';

const Home = () => {
  const languagebg2 = 'https://rhapsodyofrealities.b-cdn.net/reachoutworld/card_images/2024/optimised/all_languages_-min_desktop_october_2023.jpg'
  const mobileImg = 'https://rhapsodyofrealities.b-cdn.net/reachoutworld/card_images/give-mobile-new_october_2023.jpg'
  const mobileImg2 = 'https://rhapsodyofrealities.b-cdn.net/reachoutworld/card_images/all_languages-mob-new_october_2023.jpg' 
  const [image, setImage] = useState(languagebg);
  const [Mobileimage, setMobileImage] = useState(mobileImg);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const windowHeight = window.innerHeight;
  //     const changePoint = windowHeight * 2.8;

  //     if (scrollPosition > changePoint) {
  //       setImage(languagebg2);
  //     } else {
  //       setImage(languagebg);
  //     }

  //     if (scrollPosition > changePoint) {
  //       setMobileImage(mobileImg2);
  //     } else {
  //       setMobileImage(mobileImg);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div className='relative bg-white w-full h-full'>
      {/* Fixed Background Image in the middle */}
      {/* <img
  src={image}
  alt="Background"
  className='fixed hidden md:block top-1/2 left-1/2 transform object-left -translate-x-1/2 -translate-y-1/2 z-0 w-screen h-auto object-cover min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh]'
  style={{ maxWidth: '100vw', minHeight: '50vh', maxHeight: '100vh' }} // Adjust based on the requirement
/> */}
      {/* <img
  src={Mobileimage}
  alt="Background"
  className='fixed block md:hidden top-1/2 left-1/2 transform object-left -translate-x-1/2 -translate-y-1/2 z-0 w-screen h-auto object-cover min-h-[50vh]'
  style={{ maxWidth: '100vw', minHeight: '50vh', maxHeight: '100vh' }} // Adjust based on the requirement
/> */}


      <section className='relative '>
        {/* slideshow */}
        <div className='bg-white'>
          <Slideshow />
        </div>

        {/* First Card */}
        {/* <div className='px-5 bg-white object-cover w-auto h-full z-20 pt-5 shadow-xl pb-5'>
          <AboutCard />
        </div> */}

        {/* Image is revealed after AboutCard, add a gap/space between the two sections so the image can be seen */}
        {/* <div className='h-96' />  */}
        {/* Gap added for image visibility */}

        {/* Second Card */}
        {/* <section className='bg-white bg-cover p-5 h-full w-full'>
          <div>
            <SignUpCard />
          </div>
        </section> */}

        {/* Image is revealed after Signup card, add a gap between the two sections so the image is revealed */}
        {/* <div className='h-96' />  */}

        {/* <section className='bg-white bg-cover p-5 h-full w-full'>
          <div className='bg-white pb-5 h-auto'>
            <LanguageCard />
          </div>
        </section> */}
            {/* <Footer/> */}
      </section>
    </div>
  );
};

export default Home;
