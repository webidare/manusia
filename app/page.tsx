import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Heart, PenLine, BookOpen } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-pink-50">
      <div className="max-w-3xl mx-auto px-4 pt-8 md:pt-20">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-8 h-8 text-pink-500 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-4">
            Share Your Love
          </h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Create and share beautiful love messages with someone special
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="group hover:shadow-xl transition-all duration-300 border-pink-100">
            <CardHeader className="space-y-1">
              <div className="flex items-center space-x-2">
                <PenLine className="w-5 h-5 text-pink-500" />
                <CardTitle className="text-xl text-pink-600">Create Message</CardTitle>
              </div>
              <CardDescription>Write a heartfelt message</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                asChild 
                className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Link href="/submit">Start Writing</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-xl transition-all duration-300 border-pink-100">
            <CardHeader className="space-y-1">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-pink-500" />
                <CardTitle className="text-xl text-pink-600">Browse Messages</CardTitle>
              </div>
              <CardDescription>Read shared love notes</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                asChild 
                variant="outline" 
                className="w-full border-2 border-pink-200 text-pink-600 hover:bg-pink-50 transition-all duration-300"
              >
                <Link href="/browse">View Messages</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
