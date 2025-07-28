import React from 'react';
import bgImage from './lucas.jpg'; // if you're importing a local image

const Page = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/assets/lucas.jpeg')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <h1 style={{ color: 'white' }}>Welcome</h1>
    </div>
  );
};

export default Page;
