import React from 'react';
import { categories } from '@/assets/categories.tsx';
import { SideNavItem } from '@/components/SideNav/item.tsx';
import { FaGithub } from 'react-icons/fa6';

export const SideNav: React.FC = () => {
  return <div className='h-[100vh] min-w-[240px] bg-gray-900 text-gray-400 flex flex-col gap-10 items-center py-10'>
    <div className='w-[160px]'>
      <img src='/furryhome.png' alt='logo' />
    </div>
    <div className='h-[calc(100vh-40px-48px-40px-32px)] overflow-y-auto'>
      {categories.map(category => <SideNavItem category={category} key={category.name} />)}
    </div>
    <div className='text-xs'>
      <a href='https://github.com/colour93/furryhome-refator' target='_blank' className='flex items-center gap-1 hover:text-gray-200'>
        <FaGithub />
        <span>colour93 / furryhome-refactor</span>
      </a>
    </div>
  </div>;
};