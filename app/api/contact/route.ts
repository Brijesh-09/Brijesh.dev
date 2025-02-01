import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, idea } = body;

    const client = await clientPromise;
    const db = client.db("portfolio");
    
    const result = await db.collection("contacts").insertOne({
      email,
      idea,
      createdAt: new Date()
    });

    return NextResponse.json({ success: true, id: result.insertedId });
  } catch (error) {
    console.error('Error saving contact:', error);
    return NextResponse.json(
      { error: 'Failed to save contact information' },
      { status: 500 }
    );
  }
}