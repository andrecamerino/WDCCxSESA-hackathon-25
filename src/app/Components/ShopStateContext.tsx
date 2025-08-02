'use client';

import React, { ReactNode } from 'react';

interface ShopStateProviderProps {
  children: ReactNode;
}

export const ShopStateProvider: React.FC<ShopStateProviderProps> = ({ children }) => {
  return <>{children}</>;
};