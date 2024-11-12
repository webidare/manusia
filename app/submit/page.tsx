// app/submit/page.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast'

export default function SubmitPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    
    const formData = new FormData(event.currentTarget)
    const data = {
      sender: formData.get('sender'),
      recipient: formData.get('recipient'),
      message: formData.get('message')
    }
    
    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      
      if (!response.ok) throw new Error('Failed to submit message')
      
      const result = await response.json()
      toast({
        title: "Message Created!",
        description: "Your love message has been shared successfully.",
      })
      router.push(`/messages/${result.id}`)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-pink-600">Create Love Message</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="sender">From</Label>
            <Input
              id="sender"
              name="sender"
              required
              className="border-pink-200 focus:ring-pink-500"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="recipient">To</Label>
            <Input
              id="recipient"
              name="recipient"
              required
              className="border-pink-200 focus:ring-pink-500"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Your Message</Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={6}
              className="border-pink-200 focus:ring-pink-500"
            />
          </div>
          
          <Button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Share Love Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
