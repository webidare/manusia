import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { Heart, PenLine, BookOpen, SparklesIcon } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50 dark:from-pink-950 dark:via-background dark:to-pink-950">
      <div className="mx-auto max-w-3xl px-4 pt-8 md:pt-20">
        {/* Hero Section */}
        <div className="text-center mb-12 space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <Badge variant="secondary" className="px-4 py-1">
              <SparklesIcon className="w-3 h-3 mr-1" />
              Share Love Today
            </Badge>
          </div>
          
          <div className="flex items-center justify-center">
            <Heart className="w-8 h-8 text-pink-500 animate-pulse" />
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Share Your Love
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Create and share beautiful love messages with someone special
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-pink-100 dark:bg-pink-900" />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="group relative overflow-hidden border border-pink-100 dark:border-pink-900">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="space-y-1">
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-md bg-pink-100 dark:bg-pink-900">
                  <PenLine className="w-4 h-4 text-pink-500" />
                </div>
                <CardTitle className="text-xl text-foreground">Create Message</CardTitle>
              </div>
              <CardDescription>Write a heartfelt message</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                asChild 
                className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
              >
                <Link href="/submit">Start Writing</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="group relative overflow-hidden border border-pink-100 dark:border-pink-900">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="space-y-1">
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-md bg-pink-100 dark:bg-pink-900">
                  <BookOpen className="w-4 h-4 text-pink-500" />
                </div>
                <CardTitle className="text-xl text-foreground">Browse Messages</CardTitle>
              </div>
              <CardDescription>Read shared love notes</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                asChild 
                variant="outline" 
                className="w-full border-2 border-pink-200 dark:border-pink-800 text-pink-600 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-950"
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
