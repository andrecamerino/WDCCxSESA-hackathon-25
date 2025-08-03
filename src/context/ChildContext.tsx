'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

type ChildContextType = {
  money: number | null;
  setMoney: (amount: number) => void;
  childID: string | undefined;
};

const ChildContext = createContext<ChildContextType | undefined>(undefined);

export const useChild = () => {
  const context = useContext(ChildContext);
  if (!context) throw new Error('useChild must be used within a ChildProvider');
  return context;
};

export const ChildProvider = ({
  children,
  childID,
}: {
  children: React.ReactNode;
  childID: string;
}) => {
  const [money, setMoney] = useState<number | null>(null);

  useEffect(() => {
    const fetchChild = async () => {
      try {
        const res = await fetch(`/api/children/${childID}`);
        const data = await res.json();
        setMoney(data.money);
      } catch (error) {
        console.error('Failed to fetch child money:', error);
      }
    };

    fetchChild();
  }, [childID]);

  return (
    <ChildContext.Provider value={{ money, setMoney, childID }}>
      {children}
    </ChildContext.Provider>
  );
};