
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import InstagramFeed from '@/components/InstagramFeed'
import OrderAndMenuSection from '@/components/OrderAndMenuSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto px-8 py-4 space-y-5">
        <Hero />
        <section id="instagram">
          <InstagramFeed />
        </section>
        <section id="order">
          <OrderAndMenuSection />
        </section>
      </div>
      <Footer />
    </main>
  )
}

