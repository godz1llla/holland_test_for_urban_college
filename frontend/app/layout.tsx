import '../styles/globals.css';

import { Montserrat } from 'next/font/google';
import Head from 'next/head';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '700', '900'],
  display: 'swap',
});

export const metadata = {
  title: 'RIASEC Test',
  description: 'Personality test based on the RIASEC model.',
};

import { LanguageProvider } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={montserrat.className}>
        <LanguageProvider>
          <LanguageSwitcher />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
