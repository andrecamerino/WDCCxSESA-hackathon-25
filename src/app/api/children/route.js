import { NextResponse } from 'next/server';
import connect from '../../../../db';
import Child from '../../../../models/Child';

export const GET = async (request) => {
  try {
    await connect();
    const children = await Child.find();
    return NextResponse.json(children, { status: 200 });
  } catch (error) {
    console.error('Error fetching children:', error);
    return NextResponse.json({ error: 'Failed to fetch children' }, { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    await connect();
    const body = await request.json();

    if (!body.name) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    const newChild = await Child.create({
      name: body.name,
      money: body.money || 0,
    });

    return NextResponse.json(newChild, { status: 201 });
  } catch (error) {
    console.error('Error creating child:', error);
    return NextResponse.json(
      { error: 'Failed to create child' },
      { status: 500 }
    );
  }
};