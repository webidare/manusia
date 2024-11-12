// app/layout.tsx
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-pink-100 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-pink-600">
              LoveNotes ❤️
            </Link>
            <div className="space-x-4">
              <Button variant="ghost" className="text-pink-600 hover:text-pink-700">
                <Link href="/submit">Create Message</Link>
              </Button>
              <Button variant="ghost" className="text-pink-600 hover:text-pink-700">
                <Link href="/browse">Browse Messages</Link>
              </Button>
            </div>
          </div>
        </nav>
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  )
}
