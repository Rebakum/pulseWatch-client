import { CTA } from './_components/CTA/CTA';
import { Hero } from './_components/Hero/Hero';
import { Footer } from '@/components/common/Footer/Footer';
import { Navbar } from '@/components/common/Navbar/Navbar';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
