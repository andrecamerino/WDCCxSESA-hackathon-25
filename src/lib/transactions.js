import connect from '@/db';
import Child from '@/models/Child';

export async function applyMoneyChange(amount, childID) {
  if (!childID) throw new Error('Missing childID');

  await connect();
  const child = await Child.findById(childID);
  if (!child) throw new Error('Child not found');

  child.money += amount;
  await child.save();

  return child;
}