// app/api/messages/[id]/route.ts
import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const result = await sql`
      SELECT * FROM messages
      WHERE id = ${params.id}
    `
    
    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Message not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(result.rows[0])
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch message' },
      { status: 500 }
    )
  }
}