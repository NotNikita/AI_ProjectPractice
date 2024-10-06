import type {Metadata} from 'next';
import '@radix-ui/themes/styles.css';

import './globals.css';
import './theme-config.css';
import {nunito} from '@/fonts';
import {Theme} from '@radix-ui/themes';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: {
    template: '%s | Tutmenu',
    default: 'Tutmenu',
  },
  description: 'TutMenu to help you decide',
  metadataBase: new URL('https://github.com/NotNikita/tutmenu'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${nunito.variable} antialiased`}>
        <Theme accentColor='grass' grayColor='olive'>
          <div className='flex flex-col h-screen md:flex-row md:overflow-hidden'>
            <div className='w-full flex-none md:w-64'>
              <Sidebar />
            </div>
            <div className='flex items-center justify-center flex-grow p-6 md:overflow-y-auto md:p-12'>{children}</div>
          </div>
        </Theme>
      </body>
    </html>
  );
}
