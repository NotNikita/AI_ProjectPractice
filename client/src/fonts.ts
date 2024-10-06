import {Space_Grotesk, Lusitana, Nunito} from 'next/font/google';

export const spaceGrotesk = Space_Grotesk({subsets: ['latin-ext']});

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});
