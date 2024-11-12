// app/page.tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-3xl mx-auto pt-20 text-center">
        <h1 className="text-5xl font-bold text-pink-600 mb-6">Share Your Love ❤️</h1>
        <p className="text-lg text-gray-600 mb-12">
          Create and share beautiful love messages with someone special
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-pink-600">Create Message</CardTitle>
              <CardDescription>Write a heartfelt message</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full bg-pink-500 hover:bg-pink-600">
                <Link href="/submit">Start Writing</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-pink-600">Browse Messages</CardTitle>
              <CardDescription>Read shared love notes</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full border-pink-200 text-pink-600">
                <Link href="/browse">View Messages</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
