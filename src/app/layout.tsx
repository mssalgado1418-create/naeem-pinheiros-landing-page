import type { Metadata } from 'next';
import { Bodoni_Moda, Inter } from 'next/font/google';
import './globals.css';
import { AmbientAudio } from '@/components/ui/AmbientAudio';
import Script from 'next/script';


const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-bodoni',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'NAEEM Luxury Residences | Wellness Ecosystem',
  description: 'A Tribute to Wellness',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${bodoni.variable} ${inter.variable} bg-obsidian text-white font-sans selection:bg-champagne selection:text-obsidian overflow-x-hidden antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H6LN79DTSN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-H6LN79DTSN');
          `}
        </Script>
        <AmbientAudio />
        {children}
      </body>
    </html>
  );
}
