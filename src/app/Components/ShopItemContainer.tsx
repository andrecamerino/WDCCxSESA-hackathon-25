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
  const { childID, money, setMoney } = useChild(); // ✅ get from context

  const [items, setItems] = useState<ShopItem[]>([]);
  const [purchasedItems, setPurchasedItems] = useState<Set<string>>(new Set());
  const [filters, setFilters] = useState<string[]>([]);

  const addFilter = (filter: string) => {
    setFilters((prev) => (prev.includes(filter) ? prev : [...prev, filter]));
  };

  const removeFilter = (filter: string) => {
    setFilters((prev) => prev.filter((f) => f !== filter));
  };

  const clearFilters = () => setFilters([]);

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
      alert('Loading money...');
      return;
    }
    if (money < price) {
      alert('Not enough money!');
      return;
    }

    try {
      const res = await fetch(`/api/transactions/${childID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: -price }),
      });

      if (!res.ok) throw new Error('Transaction failed');

      const updated = await res.json();
      setMoney(updated.money); // ✅ update shared money
      setPurchasedItems((prev) => new Set(prev).add(itemId));
    } catch (err) {
      console.error('Error processing purchase:', err);
      alert('Error processing purchase');
    }
  };

  const filteredItems =
    filters.length > 0
      ? items.filter((item) => filters.includes(item.category))
      : items;

  const availableFilters = ['Toys', 'Books', 'Electronics', 'Clothing', 'Food'];

  return (
    <div className="flex flex-col items-center px-4 pt-10 h-screen overflow-hidden">
      <div className="flex flex-col items-center space-y-4 w-full max-w-md flex-1 overflow-y-auto pb-48">
        {filteredItems
          .slice()
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          .map((item) => (
            <KidItem
              key={item._id}
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

      {/* Filters */}
      <div className="w-full max-w-md fixed bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Filters</h3>

          {filters.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => removeFilter(filter)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-600"
                >
                  {filter} ×
                </button>
              ))}
              <button
                onClick={clearFilters}
                className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm hover:bg-gray-600"
              >
                Clear All
              </button>
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {availableFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => addFilter(filter)}
                disabled={filters.includes(filter)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${filters.includes(filter)
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-green-500 text-white hover:bg-green-600'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItemContainer;