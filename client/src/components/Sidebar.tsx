import React from 'react';
import Link from 'next/link';
import RotatingSphere from './RotatingSphere';

const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white flex flex-col shadow-lg'>
      {/* Sidebar Header */}
      <div className='flex items-center justify-center h-[120px] bg-white shadow'>
        <RotatingSphere />
      </div>

      <nav className='mt-10 flex-grow'>
        <ul>
          <li className='px-6 py-2 hover:bg-gray-700'>
            <Link href='/depth' className='text-lg'>
              Depth Pro (by Apple)
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
