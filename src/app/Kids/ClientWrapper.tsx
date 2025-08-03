'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { ChildProvider } from '@/context/ChildContext';
import KidsNavbar from '../Components/KidsNavbar';
import Header from '../Components/KidsHeader';

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const { childID } = useParams();

  if (!childID || typeof childID !== 'string') return null;

  return (
    <ChildProvider childID={childID}>
      <Header />
      {children}
      <KidsNavbar />
    </ChildProvider>
  );
};

export default ClientWrapper;