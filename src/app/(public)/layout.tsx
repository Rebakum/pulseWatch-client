import Footer from '@/components/common/Footer/Footer';
import { Navbar } from '@/components/common/Navbar/Navbar';
import { Suspense, type ReactNode } from 'react';

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <main>{children}</main>
      <Footer />
    </>
  );
}
