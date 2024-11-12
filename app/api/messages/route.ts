// app/api/messages/route.ts
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

interface Message {
  id: number;
  sender: string;
  recipient: string;
  message: string;
  created_at: string;
}

interface CreateMessageBody {
  sender: string;
  recipient: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: CreateMessageBody = await request.json();
    
    const { rows } = await sql`
      INSERT INTO messages (sender, recipient, message)
      VALUES (${body.sender}, ${body.recipient}, ${body.message})
      RETURNING id, sender, recipient, message, created_at
    `;
    
    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error('Failed to create message:', error);
    return NextResponse.json(
      { error: 'Failed to create message' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const { rows } = await sql<Message>`
      SELECT * FROM messages
      ORDER BY created_at DESC
    `;
    
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Failed to fetch messages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}
