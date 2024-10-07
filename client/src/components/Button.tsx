'use client';

export function Button({
  children,
  action,
  disabled = false,
}: {
  children: React.ReactNode;
  action?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={action}
      disabled={disabled}
      className='inline-flex h-[35px] cursor-pointer items-center justify-center rounded px-[15px] text-[15px] font-medium leading-none text-green11 outline-none hover:bg-slate-300'
    >
      {children}
    </button>
  );
}
