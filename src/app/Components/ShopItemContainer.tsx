'use client';

import React, { useEffect, useState } from 'react';
import KidItem from './KidItem';
import { useChild } from '@/context/ChildContext';

type ShopItem = {
  _id: string;
  name: string;
  price: number;
  category: string;
  imgSrc?: string;
  stock?: number;
  createdAt: string;
};

const ShopItemContainer = () => {
  const { childID, money, setMoney } = useChild(); // get from context

  const [items, setItems] = useState<ShopItem[]>([]);
  const [purchasedItems, setPurchasedItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch('/api/shopItems');
        const data = await res.json();
        setItems(data);
      } catch (err) {
        console.error('Error fetching shop items:', err);
      }
    };
    fetchItems();
  }, []);

  const handlePurchase = async (itemId: string, price: number) => {
    if (money === null) {
      alert('Loading money info, please wait...');
      return;
    }

    if (money < price) {
      alert('Not enough money to purchase!');
      return;
    }

    try {
      const res = await fetch(`/api/transactions/${childID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: -price }),
      });

      if (!res.ok) throw new Error('Purchase failed');

      const updatedChild = await res.json();
      setMoney(updatedChild.money);

      setPurchasedItems(prev => new Set(prev).add(itemId));
    } catch (err) {
      console.error(err);
      alert('Error processing purchase');
    }
  };

  return (
    <div className="flex flex-col items-center px-4 pt-10 h-screen overflow-hidden">
      {/* Shop Items - Scrollable Container */}
      <div className="flex flex-col items-center space-y-4 w-full max-w-md flex-1 overflow-y-auto pb-[50px]">
        {items
          .slice()
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          .map(item => (
            <KidItem
              key={item._id}
              _id={item._id}
              name={item.name}
              price={item.price}
              imgSrc={item.imgSrc}
              stock={item.stock}
              isPurchased={purchasedItems.has(item._id)}
              globalProgress={0}
              onPurchase={() => handlePurchase(item._id, item.price)}
            />
          ))}
      </div>
    </div>
  );
};

export default ShopItemContainer;