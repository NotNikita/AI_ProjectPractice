import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

type SearchParams = {
  query?: string;
  page?: string;
};

interface PageProps {
  searchParams?: SearchParams;
}

export default function Page({}: PageProps) {
  return <main className='w-full'>Customers page</main>;
}
