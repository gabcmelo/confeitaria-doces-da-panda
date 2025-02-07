'use client'

import { Button } from './ui/button'

export default function FloatBottomButton() {
  return (
    <div className='fixed bottom-4 right-4 flex flex-col gap-4'>
      <Button className='bg-green-600 text-white  hover:bg-panda-primary md:text-2xl md:p-[25px] shadow-md animate-bounce rounded-3xl' onClick={() => {
        window.open('https://api.whatsapp.com/send/?phone=5521967756257&text&type=phone_number&app_absent=0', '_blank');
      }
      }>whatsapp! </Button>
    </div>


  )
}

