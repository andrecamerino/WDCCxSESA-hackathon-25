import { NextResponse } from 'next/server';
import connect from '../../../../db';

import ShopItem from '../../../../models/ShopItem';

export const GET = async (request) => {
    try {
        await connect();
        const items = await ShopItem.find();
        return NextResponse.json(items, { status: 200 });
    } catch (error) {
        console.error('Error fetching shop items:', error);
        return NextResponse.json({ error: 'Failed to fetch shop items' }, { status: 500 });
    }
};

export const POST = async (request) => {
    try {
        await connect();
        const body = await request.json();

        if (!body.name || !body.price) {
            return NextResponse.json(
                { error: 'Name and price are required' },
                { status: 400 }
            );
        }

        const newItem = await ShopItem.create({
            name: body.name,
            price: body.price,
            imgSrc: body.imgSrc || '',
            stocks: body.stocks || 1,
        });

        return NextResponse.json(newItem, { status: 201 });
    } catch (error) {
        console.error('Error creating shop item:', error);
        return NextResponse.json(
            { error: 'Failed to create shop item' },
            { status: 500 }
        );
    }
};