import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { SocialSidebar } from '@/components/social-sidebar';
import { MobileSocialBar } from '@/components/mobile-social-bar';
import { Providers } from './providers';
import { Toaster } from '@/components/ui/toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Asian Kids Dance Crew',
  description: 'Join the most vibrant dance community for Asian kids',
  keywords: ['dance studio', 'kids dance', 'asian dance', 'dance classes'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex min-h-screen flex-col">
              <Navigation />
              <SocialSidebar />
              <main className="flex-1">{children}</main>
              <MobileSocialBar />
              <Footer />
            </div>
            <Toaster />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}