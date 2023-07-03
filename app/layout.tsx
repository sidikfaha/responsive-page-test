import './globals.css'
import { Inter } from 'next/font/google'


export const metadata = {
  title: 'Test 1',
  description: 'Responsive page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-black'>{children}</body>
    </html>
  )
}
