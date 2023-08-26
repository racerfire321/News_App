import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './Header'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Bits News',
  description: 'News app demo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Header/>
       <div className='max-w-6xl mx-auto'>
          {children}
          </div></body>
    </html>
  )
}
/*className='bg-gray-100 dark:bg-zinc-900 transition-all duration-700'*/