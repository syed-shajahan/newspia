import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Lato } from 'next/font/google';
import './globals.css';
import Header from '@/components/home/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import Categories from '@/components/home/Categories';
import RandomNews from '@/components/home/RandomNews';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${lato.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          <Categories />
          <div className=" flex items-start container px-5 mx-auto">
            <div className="w-full">{children}</div>
            <RandomNews />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
