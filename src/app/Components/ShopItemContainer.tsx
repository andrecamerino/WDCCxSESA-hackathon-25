import React from 'react'
import KidItem from './KidItem';
import { useShopState } from './ShopStateContext';

const ShopItemContainer = () => {
  const { filters, addFilter, removeFilter, clearFilters } = useShopState();

  // Sample shop data
  const shopItems = [
    { id: 1, name: "Golden Apple", price: 100, imageSrc: "/assets/example-photo.jpeg" },
    { id: 2, name: "Magic Potion", price: 50, imageSrc: "/assets/example-photo.jpeg" },
    { id: 3, name: "Dragon Scale", price: 250, imageSrc: "/assets/example-photo.jpeg" },
    { id: 4, name: "Mystic Orb", price: 500, imageSrc: "/assets/example-photo.jpeg" },
    { id: 5, name: "Phoenix Feather", price: 300, imageSrc: "/assets/example-photo.jpeg" },
  ];

  const availableFilters = ["Toys", "Books", "Electronics", "Clothing", "Food"];

  return (
    <div className="flex flex-col items-center px-4 pt-10 h-screen overflow-hidden">
      {/* Shop Items - Scrollable Container */}
      <div className="flex flex-col items-center space-y-4 w-full max-w-md flex-1 overflow-y-auto pb-48">
        {shopItems.map((item) => (
          <KidItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            imageSrc={item.imageSrc}
          />
        ))}
      </div>

      {/* Filters Section at Bottom - Fixed */}
      <div className="w-full max-w-md fixed bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Filters</h3>
          
          {/* Active Filters */}
          {filters.length > 0 && (
            <div className="mb-3">
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => removeFilter(filter)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-600 transition-colors"
                  >
                    {filter} ×
                  </button>
                ))}
                <button
                  onClick={clearFilters}
                  className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm hover:bg-gray-600 transition-colors"
                >
                  Clear All
                </button>
              </div>
            </div>
          )}

          {/* Available Filters */}
          <div className="flex flex-wrap gap-2">
            {availableFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => addFilter(filter)}
                disabled={filters.includes(filter)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  filters.includes(filter)
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
  )
}

export default ShopItemContainer