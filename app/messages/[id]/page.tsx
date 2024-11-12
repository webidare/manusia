// app/messages/[id]/page.tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { notFound } from 'next/navigation'

async function getMessage(id: string) {
  const res = await fetch(`http://localhost:3000/api/messages/${id}`)
  if (!res.ok) return null
  return res.json()
}

export default async function MessagePage({ params }: { params: { id: string } }) {
  const message = await getMessage(params.id)
  
  if (!message) {
    notFound()
  }
  
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-pink-600">
          A Love Message from {message.sender} to {message.recipient}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg whitespace-pre-wrap">{message.message}</p>
        <div className="mt-6 text-sm text-gray-500">
          Shared on {new Date(message.createdAt).toLocaleDateString()}
        </div>
      </CardContent>
    </Card>
  )