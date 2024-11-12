// app/api/messages/route.ts
import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { sender, recipient, message } = await request.json()
    
    const result = await sql`
      INSERT INTO messages (sender, recipient, message)
      VALUES (${sender}, ${recipient}, ${message})
      RETURNING id
    `
    
    return NextResponse.json(result.rows[0])
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create message' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const result = await sql`
      SELECT * FROM messages
      ORDER BY created_at DESC
    `
    
    return NextResponse.json(result.rows)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    )
  }
}
