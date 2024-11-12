// app/messages/[id]/page.tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { notFound } from 'next/navigation';
import { sql } from '@vercel/postgres';

async function getMessage(id: string) {
  try {
    const { rows } = await sql`
      SELECT * FROM messages 
      WHERE id = ${id}
    `;
    return rows[0] || null;
  } catch (error) {
    console.error('Database error:', error);
    return null;
  }
}

export default async function MessagePage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const message = await getMessage(params.id);
  
  if (!message) {
    notFound();
  }
  
  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-pink-600">
            A Love Message from {message.sender} to {message.recipient}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg whitespace-pre-wrap leading-relaxed text-gray-700">
            {message.message}
          </p>
          <div className="mt-6 text-sm text-gray-500">
            Shared on {new Date(message.created_at).toLocaleDateString()}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}