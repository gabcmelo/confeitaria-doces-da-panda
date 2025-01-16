import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Doces Da Panda - Confeitaria e Doceria',
  description: 'Deliciosos doces e bolos personalizados para todas as ocasiões. Faça sua encomenda hoje!',
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
      </body>
    </html>
  )
}

