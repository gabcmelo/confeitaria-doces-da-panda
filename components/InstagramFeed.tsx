'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight, Instagram } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const instagramImages = [
  '/instagram/IMG_0041.jpg',
  '/instagram/IMG_0123.jpg',
  '/instagram/IMG_0042.jpg',
  '/instagram/IMG_2024.jpg',
  '/instagram/IMG_2025.jpg',
  '/instagram/IMG_2293.jpg',
  '/instagram/IMG_2302.jpg',
]


export default function InstagramFeed() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      })
    ]
  )

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
  const scrollNext = () => emblaApi && emblaApi.scrollNext()

  return (
    <section className="bg-panda-cream pt-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-coffecake font-light text-panda-pink-600 text-center flex items-center justify-center mb-8">
          <Instagram className="h-8 w-8 mr-2" />
          Nosso Instagram
        </h2>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {instagramImages.map((image, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] p-2">
                  <div className="relative aspect-square group overflow-hidden rounded-lg shadow-md">
                    <Image 
                      src={image || "/placeholder.svg"}
                      alt={`Instagram post ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Instagram className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-panda-pink-600" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-panda-pink-600" />
          </button>
        </div>
        <div className="text-center py-8">
          <a 
            href="https://www.instagram.com/doces.dapanda/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-panda-pink-500 text-white py-2 px-6 rounded-full text-lg hover:bg-panda-pink-600 transition duration-300 inline-flex items-center"
          >
            <span>Siga-nos no Instagram</span>
            <ChevronRight className="h-5 w-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}

