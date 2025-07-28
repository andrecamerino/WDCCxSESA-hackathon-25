import React from 'react'
import HeaderComponent from '../Components/HeaderComponent'
import bgImage from './lucas.jpg'; // if you're importing a local image


const Page = () => {
  return (
    <div
      <HeaderComponent />
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
