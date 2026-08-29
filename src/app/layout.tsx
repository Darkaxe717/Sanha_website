import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sanha Fashion — The Bridal Destination | Premium Textile Showroom in Kerala',
  description:
    'Sanha Fashion is Kerala\'s premier bridal and family fashion destination since 1975. Explore exquisite silk sarees, bridal lehengas, designer wear, and more at our showrooms in Tirur and Valanchery.',
  keywords: [
    'Sanha Fashion',
    'bridal wear Kerala',
    'silk sarees Tirur',
    'wedding shopping Kerala',
    'Kanchipuram sarees',
    'Banarasi sarees',
    'designer lehenga',
    'men sherwani',
    'textile showroom Malappuram',
    'bridal destination',
  ],
  openGraph: {
    title: 'Sanha Fashion — The Bridal Destination',
    description:
      'Curating timeless elegance since 1975. Discover our exquisite collection of bridal wear, silk sarees, and designer garments.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Sanha Fashion',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
