import React from 'react'
import KidItem from './KidItem';

const ShopItemContainer = () => {
  return (
    <div
                className="flex flex-col items-center px-4 pt-10 h-200 overflow-y-auto pb-100"
            >
                <KidItem />
                <KidItem />
                <KidItem />
                <KidItem />
                <KidItem />
            </div>
  )
}

export default ShopItemContainer