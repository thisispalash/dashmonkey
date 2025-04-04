import type { Metadata } from 'next';
import { Syne_Mono } from 'next/font/google';
import './globals.css';

import Script from 'next/script';

const syneMono = Syne_Mono({
  variable: '--font-default',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Dash Mon[k]ey',
  description: '',
  // Control your monkey brain
  // Feed your pet monkey healthy recipes, improve your life
  // What even is this project bro? =.='
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <Script 
      async 
      src="/js/goat.js" 
      data-goatcounter="https://monkey.goatcounter.com/count" 
    />
      <link rel="icon" href="/circus-monkey.svg" />
      <body
        className={`
          ${syneMono.variable} 
          antialiased
          font-default
        `}
      >
        {children}
      </body>
    </html>
  );
}
