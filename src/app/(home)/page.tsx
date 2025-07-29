'use client';

import React from 'react'
import HeaderComponent from '../Components/HeaderComponent'
import Questions from '../Components/Questions';


const Page = () => {
  return (
    <div

    className='flex flex-col items-center justify-center scroll-smooth'

      style={{
        backgroundImage: `url('/assets/lucas.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >

      < HeaderComponent />

      <Questions />
    </div>
  );
};

export default Page;
