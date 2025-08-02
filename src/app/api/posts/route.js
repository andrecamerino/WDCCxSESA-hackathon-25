import { NextResponse } from 'next/server';
import connect from '../../../../db';
import Post from '../../../../models/Post';

export const GET = async (request) => {
    try {
        await connect();
        const posts = await Post.find();
        return NextResponse.json(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        console.error('Error fetching posts:', error);
        return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    }
}

export const POST = async (request) => {
    try {
        await connect();
        const body = await request.json();

        // Optional: validate input
        if (!body.title || !body.description) {
            return NextResponse.json(
                { error: 'Title and description are required' },
                { status: 400 }
            );
        }

        const newPost = await Post.create({
            title: body.title,
            description: body.description,
        });

        return NextResponse.json(newPost, { status: 201 });
    } catch (error) {
        console.error('Error creating post:', error);
        return NextResponse.json(
            { error: 'Failed to create post' },
            { status: 500 }
        );
    }
};