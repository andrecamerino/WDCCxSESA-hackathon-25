import { NextResponse } from 'next/server';
import connect from '../../../../../db';
import Child from '../../../../../models/Child';

export const GET = async (
  req,
  contextPromise: Promise<{ params: Promise<{ childID: string }> }>
) => {
  try {
    const context = await contextPromise;      // await context
    const params = await context.params;       // await params
    const childID = params.childID;             // extract id

    await connect();

    const child = await Child.findById(childID);
    if (!child) {
      return NextResponse.json({ error: 'Child not found' }, { status: 404 });
    }

    // Return child data as JSON
    return NextResponse.json(child, { status: 200 });
  } catch (error) {
    console.error('Error fetching child:', error);
    return NextResponse.json({ error: 'Failed to fetch child' }, { status: 500 });
  }
};