import React, { useEffect, useState } from 'react'
import KidItem from './KidItem';

type ShopItem = {
  _id: string;
  name: string;
  price: number;
  imgSrc?: string;
  stock?: number;
  createdAt: string;
};

const ShopItemContainer = () => {
  const [items, setItems] = useState<ShopItem[]>([]);


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("/api/shopItems");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching shop items:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="flex flex-col items-center px-4 pt-10 h-screen overflow-hidden">
      {/* Shop Items - Scrollable Container */}
      <div className="flex flex-col items-center space-y-4 w-full max-w-md flex-1 overflow-y-auto pb-50">
        {items
          .slice()
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          .map((item) => (
            <KidItem
              key={item._id}
              _id={item._id}
              name={item.name}
              price={item.price}
              imgSrc={item.imgSrc}
              stock={item.stock}
            />
          ))}
      </div>
    </div>
  );
}

export default ShopItemContainer