'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ShoppingBag, FileText, Cake } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-panda-pink-100 via-panda-cream to-white py-16 md:py-24 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 ml-12 mb-12 md:mb-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-panda-pink-600 mb-6 leading-tight">
              Doces Da Panda
            </h1>
            <p className="text-xl md:text-2xl text-panda-brown mb-8 max-w-lg">
              Transforme momentos especiais em memórias doces com nossos bolos e doces artesanais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => {
                  const orderSection = document.getElementById('order')
                  if (orderSection) {
                    orderSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="bg-panda-pink-500 hover:bg-panda-pink-600 text-white text-lg py-6 px-8"
                size="lg"
              >
                <FileText className="mr-2 h-5 w-5" /> Faça sua Encomenda
              </Button>
              <Button
                onClick={() => {
                  window.open("https://www.ifood.com.br/delivery/nilopolis-rj/confeitaria-doces-da-panda-paiol-de-polvora/9dbd07b5-0ce8-41db-b863-02b3d349321f?UTM_Medium=share", "_blank")
                }}
                className="bg-[#EA1D2C] hover:bg-[#D41A29] text-white text-lg py-6 px-8"
                size="lg"
              >
                <ShoppingBag className="mr-2 h-5 w-5" /> Pedir no iFood
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
              <Image 
                src="/instagram/IMG_0041.jpg" 
                alt="Bolo decorado Doces Da Panda" 
                fill
                className="rounded-3xl shadow-2xl object-cover"
              />
              <div className="absolute -top-6 -left-6 bg-panda-pink-500 text-white p-4 rounded-full shadow-lg animate-bounce">
                <Cake className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-panda-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    </section>
  )
}

