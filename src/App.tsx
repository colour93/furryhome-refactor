import React from 'react';
import { SideNav } from '@/components/SideNav';
import { Page } from '@/components/Page';
import { HeadNav } from '@/components/HeadNav';

export const App: React.FC = () => {

  return (
    <div className='flex flex-col md:flex-row w-full h-full'>
      <SideNav className='hidden md:flex' />
      <HeadNav className='md:hidden' />
      <Page />
    </div>
  );
};
