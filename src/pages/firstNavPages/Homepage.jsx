import React from 'react';
import backgroundImg from '../../images/homepageImg/bgImg1.webp';    // Background images
import FirstFooter from '../../components/footer/FirstFooter';

export default function Homepage() {
  return (
    <>
    <div className="bg-cover bg-center h-screen"
    style={{ backgroundImage: `url(${backgroundImg})` }}>
     <h1 className="text-white text-4xl flex justify-center font-bold">Welcome to My App</h1>
     {/*Footer for first component*/}
  </div>
  <FirstFooter/>
  </>
  )
}
