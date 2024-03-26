import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yuvenal\'s Portfolio',
  description: 'Portfolio of Yuvenal Njoroge, a full stack developer based in Nairobi, Kenya.',
  verification: { google: process.env.GOOGLE_VERIFICATION },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ' flex flex-col min-h-screen'}>
        {children}
      </body>
    </html>
  )
}
