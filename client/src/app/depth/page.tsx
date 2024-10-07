import {Metadata} from 'next';
import Image from 'next/image';
import * as Tabs from '@radix-ui/react-tabs';
import {} from '@radix-ui/themes';
import {Button} from '@/components/Button';
import SelectImageForm from '@/components/SelectImageForm';

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
  return (
    <main>
      <Tabs.Root
        className='flex w-[300px] flex-col shadow-[0_2px_10px] shadow-blackA2 border rounded-md'
        defaultValue='tab1'
      >
        <Tabs.List className='flex shrink-0 border-b border-mauve6' aria-label='Manage your account'>
          <Tabs.Trigger
            className='flex h-[45px] flex-1 cursor-default select-none items-center justify-center bg-white px-5 text-[15px] leading-none text-mauve11 outline-none first:rounded-tl-md last:rounded-tr-md hover data-[state=active] data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black'
            value='tab1'
          >
            Placeholder image
          </Tabs.Trigger>
          <Tabs.Trigger
            className='flex h-[45px] flex-1 cursor-default select-none items-center justify-center bg-white px-5 text-[15px] leading-none text-mauve11 outline-none first:rounded-tl-md last:rounded-tr-md hover data-[state=active] data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black'
            value='tab2'
          >
            Try manual upload
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className='grow rounded-b-md bg-white p-5 outline-none' value='tab1'>
          <p className='mb-5 text-sm leading-normal'>Make changes to your account here. Click save when you're done.</p>
          <Image width={150} height={150} src={'/x-ray1.jpg'} alt={'x-ray placeholder'} className='mx-auto' />
          <div className='mt-5 flex justify-end'>
            <Button>Analyze depth</Button>
          </div>
        </Tabs.Content>
        <Tabs.Content
          className='grow rounded-b-md bg-white p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black'
          value='tab2'
        >
          <SelectImageForm />
        </Tabs.Content>
      </Tabs.Root>
    </main>
  );
}
