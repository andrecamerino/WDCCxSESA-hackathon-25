'use client';

import React from 'react';
import KidItem from '../Components/KidItem';
import '../globals.css'; // Ensure global styles are imported

const KidsShopPage: React.FC = () => {
    return (
        <>
            <div
                className="border-1 min-h-screen bg-[url('/assets/child-shop-page-background.png')]  bg-fixed bg-center flex flex-col items-center px-4 py-3 h-200"
            >
                {/* Add some content to test */}
                <KidItem />
            </div>
        </>
    );
};

export default KidsShopPage;