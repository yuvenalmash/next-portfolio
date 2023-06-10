import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yuvenal\'s Portfolio',
  description: 'Portfolio of Yuvenal Njoroge, built with Next.js and Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
