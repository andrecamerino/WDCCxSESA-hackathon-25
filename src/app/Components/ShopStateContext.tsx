'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ShopState {
  globalProgress: number;
  purchasedItems: Set<number>;
  filters: string[];
  setGlobalProgress: (value: number) => void;
  purchaseItem: (itemId: number) => void;
  isItemPurchased: (itemId: number) => boolean;
  addFilter: (filter: string) => void;
  removeFilter: (filter: string) => void;
  clearFilters: () => void;
}

const ShopStateContext = createContext<ShopState | undefined>(undefined);

export const useShopState = () => {
  const context = useContext(ShopStateContext);
  if (!context) {
    throw new Error('useShopState must be used within a ShopStateProvider');
  }
  return context;
};

interface ShopStateProviderProps {
  children: ReactNode;
}

export const ShopStateProvider: React.FC<ShopStateProviderProps> = ({ children }) => {
  const [globalProgress, setGlobalProgress] = useState(100);
  const [purchasedItems, setPurchasedItems] = useState<Set<number>>(new Set());
  const [filters, setFilters] = useState<string[]>([]);

  const purchaseItem = (itemId: number) => {
    setPurchasedItems(prev => new Set([...prev, itemId]));
    // Decrease global progress when item is purchased
    setGlobalProgress(prev => Math.max(0, prev - 10));
    
    // TODO: REPLACE THIS PLACEHOLDER FUNCTION WITH ACTUAL DATABASE NOTIFICATION
    // This is where you should implement the notification to send to the parent
    // Example: sendNotificationToParent(itemId, itemName, itemPrice);
    console.log(`Item ${itemId} purchased! Notification sent to parent.`);
  };

  const isItemPurchased = (itemId: number) => {
    return purchasedItems.has(itemId);
  };

  const addFilter = (filter: string) => {
    if (!filters.includes(filter)) {
      setFilters(prev => [...prev, filter]);
    }
  };

  const removeFilter = (filter: string) => {
    setFilters(prev => prev.filter(f => f !== filter));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  const value: ShopState = {
    globalProgress,
    purchasedItems,
    filters,
    setGlobalProgress,
    purchaseItem,
    isItemPurchased,
    addFilter,
    removeFilter,
    clearFilters,
  };

  return (
    <ShopStateContext.Provider value={value}>
      {children}
    </ShopStateContext.Provider>
  );
}; 