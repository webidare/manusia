import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { Heart, PenLine, BookOpen, SparklesIcon, Stars } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-white to-pink-50 dark:from-pink-950 dark:via-background dark:to-pink-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 top-20 h-72 w-72 rounded-full bg-pink-200/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-rose-200/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-100/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 pt-8 md:pt-20">
        {/* Hero Section */}
        <div className="mb-16 space-y-6 text-center">
          <div className="flex items-center justify-center space-x-2">
            <Badge variant="secondary" className="animate-fade-in group px-4 py-1.5 transition-all duration-300 hover:bg-pink-100 dark:hover:bg-pink-900">
              <SparklesIcon className="mr-1.5 h-3.5 w-3.5 animate-pulse text-pink-500" />
              <span className="group-hover:text-pink-600 dark:group-hover:text-pink-300">Share Love Today</span>
            </Badge>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="relative">
              <Heart className="h-12 w-12 animate-pulse text-pink-500" />
              <div className="absolute inset-0 animate-ping rounded-full bg-pink-500/20" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
              Share Your Love
            </h1>
            <p className="mx-auto max-w-md text-lg text-muted-foreground">
              Create and share beautiful love messages with someone special
            </p>
          </div>
        </div>

        <Separator className="my-12 bg-gradient-to-r from-transparent via-pink-200 to-transparent dark:via-pink-800" />

        {/* Cards Grid */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="group relative overflow-hidden border-2 border-pink-100 transition-all duration-300 hover:border-pink-200 hover:shadow-lg hover:shadow-pink-500/10 dark:border-pink-900 dark:hover:border-pink-800">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-rose-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <CardHeader className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="rounded-xl bg-gradient-to-br from-pink-100 to-pink-200 p-2.5 dark:from-pink-900 dark:to-pink-800">
                  <PenLine className="h-5 w-5 text-pink-500" />
                </div>
                <CardTitle className="text-2xl text-foreground">Create Message</CardTitle>
              </div>
              <CardDescription className="text-base">Write a heartfelt message for someone special</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                asChild 
                className="w-full bg-gradient-to-r from-pink-500 to-rose-500 transition-all duration-300 hover:from-pink-600 hover:to-rose-600 hover:shadow-md hover:shadow-pink-500/20"
              >
                <Link href="/submit">Start Writing</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="group relative overflow-hidden border-2 border-pink-100 transition-all duration-300 hover:border-pink-200 hover:shadow-lg hover:shadow-pink-500/10 dark:border-pink-900 dark:hover:border-pink-800">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-rose-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <CardHeader className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="rounded-xl bg-gradient-to-br from-pink-100 to-pink-200 p-2.5 dark:from-pink-900 dark:to-pink-800">
                  <BookOpen className="h-5 w-5 text-pink-500" />
                </div>
                <CardTitle className="text-2xl text-foreground">Browse Messages</CardTitle>
              </div>
              <CardDescription className="text-base">Discover heartwarming love notes from others</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                asChild 
                variant="outline" 
                className="w-full border-2 border-pink-200 text-pink-600 transition-all duration-300 hover:bg-pink-50 hover:shadow-md hover:shadow-pink-500/10 dark:border-pink-800 dark:text-pink-400 dark:hover:bg-pink-950"
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
