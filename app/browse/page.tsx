// app/browse/page.tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { sql } from '@vercel/postgres';
import { QueryResultRow } from '@vercel/postgres';

// Define the Message type
interface Message {
  id: number;
  sender: string;
  recipient: string;
  message: string;
  created_at: string;
}

async function getMessages(): Promise<Message[]> {
  try {
    const { rows } = await sql<Message>`
      SELECT 
        id::int,
        sender::text,
        recipient::text,
        message::text,
        created_at::text
      FROM messages
      ORDER BY created_at DESC
    `;
    
    // Type assertion to ensure rows match Message interface
    return rows.map((row: QueryResultRow): Message => ({
      id: Number(row.id),
      sender: String(row.sender),
      recipient: String(row.recipient),
      message: String(row.message),
      created_at: String(row.created_at)
    }));
  } catch (error) {
    console.error('Failed to fetch messages:', error);
    return [];
  }
}

export default async function BrowsePage() {
  const messages = await getMessages();
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">Browse Love Messages</h1>
      
      {messages.length === 0 ? (
        <Card className="text-center p-6">
          <p className="text-gray-500">No messages found. Be the first to share a love message!</p>
        </Card>
      ) : (
        <div className="grid gap-6">
          {messages.map((message: Message) => (
            <Link key={message.id} href={`/messages/${message.id}`}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-pink-600">
                    From {message.sender} to {message.recipient}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 text-gray-600">{message.message}</p>
                  <p className="text-sm text-gray-400 mt-2">
                    {new Date(message.created_at).toLocaleDateString()}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
