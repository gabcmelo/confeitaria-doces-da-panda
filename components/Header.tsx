'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navItems = [
    { href: "instagram", label: "Quem Somos" },
    { href: "destaques", label: "Destaques" },
    { href: "cardapio", label: "Cardapio" },
    { href: "localizacao", label: "Localização" },
  ]

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', inline: "center", block: "nearest" })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMenuOpen])

  return (
    <div className="fixed top-0 z-30 w-full bg-[#ffe3cf] backdrop-blur-sm   flex justify-between items-center px-4 py-2">
      <Link href="/" className="flex items-center">
      <Image width={80} height={80} src="/panda_rosa_logo.png" alt="Logo da Confeitaria Doces da Panda" />
      </Link>
      <div className="justify-start items-center gap-[37px] flex">
        <div className="justify-start items-start gap-1.5 flex">
          {navItems.map((item, index) => (
            <Button  key={index} variant="ghost" className="text-black hover:bg-rose-400 hover:text-white" onClick={() => scrollToSection(item.href)}>{item.label}</Button>
          ))

          }
        </div>
        <Button className="bg-[#e92162] text-white hover:bg-[#A41443] text-base font-semibold rounded-[1rem]" size={"lg"}>Encomendar Agora mesmo!</Button>
      </div>
    </div>

  )
}

