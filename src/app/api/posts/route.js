import { NextResponse } from 'next/server';
import connect from '@/app/api/db';
import Post from '@/app/api/models/Post';

export const GET = async (request) => {
    try {
        await connect();
        const posts = await Post.find();
        return NextResponse.json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    }
}