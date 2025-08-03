import { NextResponse } from 'next/server';
import connect from '../../../../db';
import Quest from '../../../../models/Quests';

export const GET = async (request) => {
    try {
        await connect();
        const quests = await Quest.find();
        return NextResponse.json(quests, { status: 200 });
    } catch (error) {
        console.error('Error fetching quests:', error);
        return NextResponse.json({ error: 'Failed to fetch quests' }, { status: 500 });
    }
}

export const POST = async (request) => {
    try {
        await connect();
        const body = await request.json();

        if (!body.task) {
            return NextResponse.json(
                { error: 'Task is required' },
                { status: 400 }
            );
        }

        const newQuest = await Quest.create({
            task: body.task,
            completed: body.completed || false,
            person: body.person || '',
        });

        return NextResponse.json(newQuest, { status: 201 });
    } catch (error) {
        console.error('Error creating quest:', error);
        return NextResponse.json(
            { error: 'Failed to create quest' },
            { status: 500 }
        );
    }
};