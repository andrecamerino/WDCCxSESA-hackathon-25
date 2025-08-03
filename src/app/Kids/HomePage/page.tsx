'use client';

import React, { useState, useRef, useEffect } from 'react';
import NotificationContainer from '../../Components/NotificationContainer';
import Image from 'next/image';

const Page = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const resetTimer = useRef<NodeJS.Timeout | null>(null);

  const handleScrollDirectionChange = (dir: 'up' | 'down') => {
    setScrollDirection(dir);

    // Reset previous timer if still active
    if (resetTimer.current) {
      clearTimeout(resetTimer.current);
    }

    // Set timer to reset direction after 500ms
    resetTimer.current = setTimeout(() => {
      setScrollDirection(null);
    }, 250);
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: "url('/assets/grass-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      className="overflow-hidden pt-20"
    >
      {/* Clouds */}
      
      <div className="relative w-full h-40 mt-10 ">
        <Image
          src="/assets/cloud.png"
          alt="Cloud 1"
          width={100}
          height={60}
          className="absolute top-4 animate-cloud-left-to-right opacity-100"
        />
        <Image
          src="/assets/cloud.png"
          alt="Cloud 2"
          width={120}
          height={70}
          className="absolute top-20 animate-cloud-left-to-right-slow opacity-100"
        />

        {/* Piggy */}
        <div className="relative z-10 flex justify-center">
          <Image
            src="/assets/piggy.png"
            alt="Piggy Quest"
            width={150}
            height={150}
            className={`mx-auto transition-transform duration-300 ${
              // This controls the actual rotation.
              scrollDirection === 'up'
                ? '-rotate-15'
                : scrollDirection === 'down'
                ? 'rotate-15'
                : ''
            }`}
          />
        </div>
      </div>

      {/* Notifications */}
      <NotificationContainer onScrollDirectionChange={handleScrollDirectionChange} />
    </div>
  );
};

export default Page;
