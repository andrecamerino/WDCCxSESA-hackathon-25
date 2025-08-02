import { NextResponse } from 'next/server';
import connect from '../../../../db';
import Post from '../../../../models/Post';

export const GET = async (request) => {
    try {
        await connect();
        return NextResponse.json("Connected to database", { status: 200 });
    } catch (error) {
        console.error('Error fetching posts:', error);
        return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    }
}