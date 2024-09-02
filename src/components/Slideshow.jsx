import React, { useState, useEffect } from 'react';
import './Slideshow.css'; // Import custom CSS for animations

const images = [
  // "https://rhapsodyofrealities.b-cdn.net/myvirtualcenter/ibillionmarch/Billion-Prayers2-min.jpg",
  // "https://rhapsodyofrealities.b-cdn.net/reachoutworld/2024/march-MOB.jpg"
];

const texts = [
  "Welcome to the ISM ReachOut World platform",
  "Transforming Lives Every Day",
  "Join Us in Making a Difference"
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden ">
      <div className="absolute inset-0 bg-black/50 z-10" />
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-no-repeat w-screen h-96 bg-center transition-opacity duration-1000 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
};

export default Slideshow;
