'use client';

import React from 'react'
import Navbar from '../Components/Navbar';

const Page = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/grass-background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <Navbar />
    </div>
  );
};

export default Page;