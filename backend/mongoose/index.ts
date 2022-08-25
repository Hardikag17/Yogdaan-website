import dbConnect from './mongodb';
import forum from './models/forum';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await dbConnect();
    console.log('database connected');
  } catch (e) {
    console.error(e);
    res.send('database connection error');
  }

  if (req.method == 'GET') {
    try {
      let result = await forum.find();
      return res.json({
        message: JSON.parse(JSON.stringify(result)),
        success: true,
      });
    } catch (error: any) {
      return res.json({
        message: new Error(error).message,
        success: false,
      });
    }
  } else if (req.method == 'POST') {
    try {
      const body = JSON.parse(req.body);
      await forum.create({
        shgid: body.shgid,
        shgImage: body.shgImage,
        description: body.description,
        img: body.image,
        location: body.location,
      });
      return res.json({
        message: 'Post added successfully',
        success: true,
      });
    } catch (error: any) {
      return res.json({
        message: new Error(error).message,
        success: false,
      });
    }
  } else {
    res.status(200).json({ error: 'Wrong route fetching' });
  }
}
