import Footer from '@/components/common/Footer/Footer';
import { Navbar } from '@/components/common/Navbar/Navbar';
import type { ReactNode } from 'react';

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
