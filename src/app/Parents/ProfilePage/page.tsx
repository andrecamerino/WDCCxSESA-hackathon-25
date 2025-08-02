'use client';

import React from 'react';
import ParentUserProfile from '../../Components/ParentUserProfile';

export default function Page() {
  const handleLogout = () => {
    console.log('User logged out');
  };

  return (
    <ParentUserProfile
      username="evanau"
      accountType="Premium"
      subscription="Monthly"
      balance={150.75}
      onLogout={handleLogout}
    />
  );
}
