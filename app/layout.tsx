import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: 'Doces Da Panda - Confeitaria e Doceria em Nilópolis',
  description: 'Deliciosos doces e bolos personalizados para todas as ocasiões em Nilópolis e região. Faça sua encomenda hoje!',
  keywords: 'doces, bolos, confeitaria, doceria, delivery, baixada, Nilópolis, doceria, confeitaria encomendas, eventos, festas',
  openGraph: {
    title: 'Doces Da Panda - Confeitaria e Doceria em Nilópolis',
    description: 'Deliciosos doces e bolos personalizados para todas as ocasiões. Faça sua encomenda hoje!',
    images: [
      {
        url: '/instagram/IMG_0041.jpg',
        width: 1200,
        height: 630,
        alt: 'Bolo decorado Doces Da Panda',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Doces Da Panda - Confeitaria e Doceria em Nilópolis',
    description: 'Deliciosos doces e bolos personalizados para todas as ocasiões. Faça sua encomenda hoje!',
    images: ['/instagram/IMG_0041.jpg'],
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="font-barlow bg-[#ffffff] relative">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

