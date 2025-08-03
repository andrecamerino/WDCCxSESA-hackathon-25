import { NextResponse } from 'next/server';
import connect from '../../../../../db';
import Child from '../../../../../models/Child';

export const POST = async (
  request: Request,
  contextPromise: Promise<{ params: Promise<{ childID: string }> }>
) => {
  try {
    const context = await contextPromise;       // await context
    const params = await context.params;        // await params
    const childID = params.childID;             // extract id

    await connect();
    const body = await request.json();

    const child = await Child.findById(childID);
    if (!child) {
      return NextResponse.json({ error: 'Child not found' }, { status: 404 });
    }

    child.money += body.amount;
    await child.save();

    return NextResponse.json(child, { status: 200 });
  } catch (error) {
    console.error('Error processing transaction:', error);
    return NextResponse.json({ error: 'Failed to process transaction' }, { status: 500 });
  }
};