import { client } from '@/sanity/lib/client';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { postId, name, email, comment } = await req.json();

  try {
    await client.create({
      _type: 'comment',
      post: { _type: 'reference', _ref: postId },
      name,
      email,
      comment,
    });
    return NextResponse.json({ message: 'Comment submitted successfully' });
  } catch (error) {
    return NextResponse.error();
  }
}
