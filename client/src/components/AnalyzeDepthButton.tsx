'use client';
import {triggerDepthPro} from '@/api/api-actions';

export async function AnalyzeDepthButton({children}: {children: React.ReactNode}) {
  // const action = () => triggerDepthPro(new Blob());
  // console.log(action());
  console.log(await fetch('/x-ray1.jpg'));
  return (
    <button
      // onClick={action}
      className='inline-flex h-[35px] cursor-pointer items-center justify-center rounded px-[15px] text-[15px] font-medium leading-none text-green11 outline-none hover:bg-slate-300'
    >
      {children}
    </button>
  );
}
