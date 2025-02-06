'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ShoppingBag, FileText, Candy } from 'lucide-react'

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div>
      <Image width={80} height={80} src="/hero/panda_marrom.png" alt="Logo da Confeitaria Doces da Panda" />
   <span>Doces da Panda</span>
   <span>Transforme momentos especiais em memórias doces !</span>
      </div>

    </section>
  )
}

