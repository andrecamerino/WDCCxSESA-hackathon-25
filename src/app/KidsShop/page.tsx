'use client';

import React from 'react';
import '../globals.css'; // Ensure global styles are imported
import ShopItemContainer from '../Components/ShopItemContainer';
import { ShopStateProvider } from '../Components/ShopStateContext';

const KidsShopPage: React.FC = () => {
    return (
        <ShopStateProvider>
            <div className="min-h-screen bg-[url('/assets/child-shop-page-background.png')] bg-cover bg-center pt-24">
                <ShopItemContainer />
            </div>
        </ShopStateProvider>
    );
};

export default KidsShopPage;