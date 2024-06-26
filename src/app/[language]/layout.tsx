import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { Header } from '@/components/header/Header';

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {

  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: {
      template: `%s - ${t('title')}`,
      default: t('title'),
    },
    description: t('description'),
    openGraph: {
      images: [
        {
          url: t('image'),
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

export default async function Root({
  children,
  params: { language },
}: {
  children: React.ReactNode;
  params: { language: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={language}>
      <body className={`relative bg-black-100 overflow-x-clip ${inter.className}`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            {/* <Footer /> */}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
