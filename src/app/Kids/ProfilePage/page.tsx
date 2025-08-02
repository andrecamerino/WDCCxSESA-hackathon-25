'use client';

import React from 'react';
import UserProfile from '../../Components/UserProfile'; // relative import from same folder

export default function Page() {
  const handleLogout = () => {
    console.log('User logged out');
  };

  return (
    <UserProfile
      username="evanau"
      accountType="Premium"
      subscription="Monthly"
      balance={150.75}
      onLogout={handleLogout}
    />
  );
}
