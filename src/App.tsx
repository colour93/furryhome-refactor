import React from 'react';
import { SideNav } from '@/components/SideNav';
import { Page } from '@/components/Page';

export const App: React.FC = () => {

  return (
    <div className='flex w-full h-full'>
      <SideNav />
      <Page />
    </div>
  );
};
