import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ShoppingBag, FileText, Phone, Cake, Clock, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function OrderAndMenuSection() {
  return (
    <section className="bg-gradient-to-br from-panda-pink-50 to-panda-cream py-16 md:py-24 relative overflow-hidden rounded" id="order">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-panda-pink-600 text-center mb-12">
          Peça Agora ou Encomende
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-[#EA1D2C] to-[#D41A29] text-white p-6 rounded-t-lg">
              <CardTitle className="text-2xl font-bold flex items-center justify-center">
                <ShoppingBag className="h-8 w-8 mr-3" />
                Peça para Entrega
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="mb-6 relative h-48 rounded-lg overflow-hidden">
                <Image 
                  src="/instagram/IMG_2302.jpg" 
                  alt="Doces variados para entrega"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-lg text-panda-brown mb-6">
                Peça nossos deliciosos doces diretamente pelo iFood para entrega rápida e conveniente.
              </p>
              <div className="space-y-4">
              <ul className="mb-6 space-y-2">
                <li className="flex items-center text-panda-brown">
                  <Clock className="h-5 w-5 mr-2 text-[#EA1D2C]" />
                  <span>Entrega em até 60 minutos</span>
                </li>
                <li className="flex items-center text-panda-brown">
                  <MapPin className="h-5 w-5 mr-2 text-[#EA1D2C]" />
                  <span>Entregamos em Nilópolis e região</span>
                </li>
              </ul>
              <a 
                href="https://www.ifood.com.br/delivery/nilopolis-rj/confeitaria-doces-da-panda-paiol-de-polvora/9dbd07b5-0ce8-41db-b863-02b3d349321f?UTM_Medium=share" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#EA1D2C] text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#D41A29] transition duration-300 inline-flex items-center justify-center w-full"
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Pedir no iFood
              </a>
              <a 
                  href="https://wa.me/5521967756257" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[#25D366] text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#128C7E] transition duration-300 inline-flex items-center justify-center w-full"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Delivery via WhatsApp
                </a>
              </div>

            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-panda-pink-500 to-panda-pink-600 text-white p-6 rounded-t-lg">
              <CardTitle className="text-2xl font-bold flex items-center justify-center">
                <Cake className="h-8 w-8 mr-3" />
                Faça sua Encomenda
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="mb-6 relative h-48 rounded-lg overflow-hidden">
                <Image 
                  src="/instagram/IMG_0123.jpg" 
                  alt="Bolo personalizado para encomenda"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-lg text-panda-brown mb-6">
                Personalize seus doces e bolos para qualquer ocasião especial. Encomende com antecedência para garantir a perfeição.
              </p>
              <div className="space-y-4">
              <ul className="mb-6 space-y-2">
                <li className="flex items-center text-panda-brown">
                  <Clock className="h-5 w-5 mr-2 text-[#EA1D2C]" />
                  <span>Entrega de qualidade e excelencia no tempo</span>
                </li>
                <li className="flex items-center text-panda-brown">
                  <MapPin className="h-5 w-5 mr-2 text-[#EA1D2C]" />
                  <span>Entregamos em Nilópolis e região, valor a combinar.</span>
                </li>
              </ul>
                <a 
                  href="https://drive.google.com/file/d/1IgcUeJCGIRmVxTJ_kIBgKJeM5jEuvB6w/view" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-panda-pink-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-panda-pink-600 transition duration-300 inline-flex items-center justify-center w-full"
                >
                  <FileText className="h-5 w-5 mr-2" />
                  Ver Cardápio de Encomenda
                </a>
                <a 
                  href="https://wa.me/5521967756257" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[#25D366] text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#128C7E] transition duration-300 inline-flex items-center justify-center w-full"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Encomendar via WhatsApp
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-panda-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    </section>
  )
}

