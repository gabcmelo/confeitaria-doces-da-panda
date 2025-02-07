'use client'

import Image from 'next/image'
import { Button } from './ui/button'
import { Car } from 'lucide-react'
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  const handleNavigateEncomenda = () => {
    router.push('/cardapio-encomenda')
  }

  const handleNavigateDelivery = () => {
    window.open('https://pedido.anota.ai/loja/confeitaria-doces-da-panda?f=msa', '_blank');
  }
  
  return (

    <div className='mx-auto w-full h-svh bg-[#ffffff] grid grid-cols-4 gap-4 items-center justify-center shadow-inner'>
      <div className='col-span-4 lg:col-span-2 justify-center items-center flex flex-col gap-8'>
        <div className='flex flex-col gap-1 items-center justify-center'>

          <Image width={100} height={100} src="/hero/panda_marrom.png" alt="Logo da Confeitaria Doce
        s da Panda" />

          <div className="flex gap-3 lg:gap-4 text-5xl lg:text-8xl justify-center items-center font-coffecake font-bold">
            <span className='text-panda-primary'>Doces</span>
            <span className="text-panda-secondary">da</span>
            <span className='text-panda-primary'>Panda</span>
          </div>
        </div>

        <span className='text-center text-sm lg:text-xl text-panda-secondary font-semibold'>Transforme momentos especiais em memórias doces!</span>

        <div className='flex gap-4'>
          <Button className='bg-panda-primary text-white hover:animate-pulse' onClick={handleNavigateEncomenda}><Car /> Quero encomendar</Button>
          <Button className='bg-panda-secondary text-white hover:animate-pulse' onClick={handleNavigateDelivery}>Pedir um Delivery</Button>
        </div>

      </div>

      <div className='col-span-4 lg:col-span-2  flex flex-row items-center justify-center'>
        <Image width={300} height={100} className="relative rounded-8xs -rotate-12  mr-[-100]" src="/hero/hero_1.png" alt="Logo da Confeitaria Doces da Panda" />
        <Image width={300} height={100} className="relative rounded-8xs " src="/hero/hero_2.png" alt="Logo da Confeitaria Doces da Panda" />
        <Image width={300} height={100} className=" relative rounded-8xs rotate-12 ml-[-50px]" src="/hero/hero_3.png" alt="Logo da Confeitaria Doces da Panda" />
      </div>
    </div>

  )
}

