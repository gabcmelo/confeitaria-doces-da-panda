'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  const handleNavigateEncomenda = () => {
    router.push('/cardapio-encomenda')
  }
  const handleNavigation = (href: string) => {
    window.open(href, '_blank');
  }

  const navItems = [
    { href: "https://www.instagram.com/doces.dapanda/", label: "Quem Somos" },
    { href: "https://maps.app.goo.gl/cvW1b6agn1nFnW179", label: "Localização" },
    { href: "https://pedido.anota.ai/loja/confeitaria-doces-da-panda?f=msa", label: "Cardapio de Delivery" },
  ]


  return (
    <div className="fixed top-0 z-30 w-full bg-[#ffe3cf] backdrop-blur-sm   flex justify-between items-center px-4 py-2">
      <Link href="/" className="flex items-center">
      <Image width={80} height={80} src="/panda_rosa_logo.png" alt="Logo da Confeitaria Doces da Panda" />
      </Link>
      <div className="justify-start items-center gap-[37px] flex">
        <div className="justify-start items-start gap-1.5 flex">
          {navItems.map((item, index) => (
            <Button  key={index} variant="ghost" className="text-black hover:bg-rose-400 hover:text-white" onClick={() => handleNavigation(item.href)}>{item.label}</Button>
          ))

          }
        </div>
        <Button className="bg-[#e92162] text-white hover:bg-[#A41443] text-base font-semibold rounded-[1rem]" size={"lg"}  onClick={handleNavigateEncomenda}>Encomendar Agora mesmo!</Button>
      </div>
    </div>

  )
}

