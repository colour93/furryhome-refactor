import { Category } from '@/typings';
import React from 'react';

interface Props {
  category: Category;
}

export const SideNavItem: React.FC<Props> = ({ category }) => {
  return <a className='p-4 flex items-center gap-4 text-gray-400 hover:text-gray-200 cursor-pointer transition-colors'
            href={`#${category.name}`}>
    {category.icon}
    <span className='text-sm'>
      {category.displayName}
    </span>
  </a>;
};