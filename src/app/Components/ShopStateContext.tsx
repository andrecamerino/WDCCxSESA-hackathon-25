'use client';

import React, { ReactNode, createContext, useContext, useState } from 'react';

interface ShopStateContextType {
  purchasedItems: Set<string>;
  markAsPurchased: (itemId: string) => void;
  isPurchased: (itemId: string) => boolean;
}

const ShopStateContext = createContext<ShopStateContextType | undefined>(undefined);

interface ShopStateProviderProps {
  children: ReactNode;
}

export const ShopStateProvider: React.FC<ShopStateProviderProps> = ({ children }) => {
  const [purchasedItems, setPurchasedItems] = useState<Set<string>>(new Set());

  const markAsPurchased = (itemId: string) => {
    setPurchasedItems(prev => new Set([...prev, itemId]));
  };

  const isPurchased = (itemId: string) => {
    return purchasedItems.has(itemId);
  };

  return (
    <ShopStateContext.Provider value={{ purchasedItems, markAsPurchased, isPurchased }}>
      {children}
    </ShopStateContext.Provider>
  );
};

export const useShopState = () => {
  const context = useContext(ShopStateContext);
  if (context === undefined) {
    throw new Error('useShopState must be used within a ShopStateProvider');
  }
  return context;
};