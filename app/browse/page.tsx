// app/browse/page.tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import Link from 'next/link'

async function getMessages() {
  const res = await fetch('http://localhost:3000/api/messages', { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to fetch messages')
  return res.json()
}

export default async function BrowsePage() {
  const messages = await getMessages()
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">Browse Love Messages</h1>
      
      <div className="grid gap-6">
        {messages.map((message) => (
          <Link key={message.id} href={`/messages/${message.id}`}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-pink-600">
                  From {message.sender} to {message.recipient}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3 text-gray-600">{message.message}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
