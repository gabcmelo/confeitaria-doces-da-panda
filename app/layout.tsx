import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatBottomButton from '@/components/FloatBottomButton'

const coffecake = localFont({
  src: "./font/Coffecake.woff2",
  variable:  '--font-coffecake'
})


export const metadata: Metadata = {
  title: 'Doces Da Panda - Confeitaria e Doceria em Nilópolis',
  description: 'Deliciosos doces e bolos personalizados para todas as ocasiões em Nilópolis e região. Faça sua encomenda hoje!',
  keywords: 'doces, bolos, confeitaria, doceria, delivery, baixada, Nilópolis, doceria, confeitaria encomendas, eventos, festas',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`antialiased ${coffecake.variable}`}>
      <Header />

        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
      <FloatBottomButton />

      </body>
    </html>
  )
}

