import Footer from '@/components/common/Footer/Footer';
import { Navbar } from '@/components/common/Navbar/Navbar';
import Home from '@/components/common/Pages/Home/Home';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}
