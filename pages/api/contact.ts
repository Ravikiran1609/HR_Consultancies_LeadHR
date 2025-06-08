import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = JSON.parse(req.body);
  await prisma.contact.create({ data });
  res.status(200).json({ message: 'Success' });
}

