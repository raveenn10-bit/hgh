import type { Metadata } from 'next';
import './globals.css';
import { StoreProvider } from '@/context/StoreContext';
import { CartProvider } from '@/context/CartContext';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'APEX MOBILE HUB | Mobile Parts, Repair Tools & Tech Hub Sri Lanka',
  description:
    'Demonstration e-commerce store for original OLED displays, high capacity batteries, charging flex cables, technician repair tools, microscopes, and premium mobile accessories in Sri Lanka.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <StoreProvider>
          <CartProvider>
            <AnnouncementBar />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </CartProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
