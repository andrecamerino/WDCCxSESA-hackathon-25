import { NextResponse } from 'next/server';
import connect from '../../../../../db';
import Quest from '../../../../../models/Quests';

export const PATCH = async (
  request: Request,
  contextPromise: Promise<{ params: Promise<{ id: string }> }>
) => {
  try {
    const context = await contextPromise;        // await the context
    const params = await context.params;         // await the params promise itself
    const id = params.id;                         // now get id

    await connect();
    const body = await request.json();

    const updatedQuest = await Quest.findByIdAndUpdate(
      id,
      { completed: body.completed },
      { new: true }
    );

    if (!updatedQuest) {
      return NextResponse.json({ error: 'Quest not found' }, { status: 404 });
    }

    return NextResponse.json(updatedQuest, { status: 200 });
  } catch (error) {
    console.error('Error updating quest:', error);
    return NextResponse.json({ error: 'Failed to update quest' }, { status: 500 });
  }
};