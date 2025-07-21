import './globals.css'
import { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'CrackMonkey',
  description: 'Cursos de análisis con datos públicos',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
  <head>
    <link rel="icon" href="/favicon.ico" />
  </head>
      <body>
        <Navbar />
        <main className="flex-1 max-w-4xl mx-auto p-4 w-full">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
