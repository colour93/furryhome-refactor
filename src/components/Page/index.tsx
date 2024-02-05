import React from 'react';
import { categories } from '@/assets/categories.tsx';
import sites from '@/assets/sites.json';
import { Site } from '@/typings';
import { LinkCard } from '@/components/Card/link.tsx';

export const Page: React.FC = () => {

  const sitesMapper: Record<string, Site[]> = (sites as Site[]).reduce((acc: Record<string, Site[]>, curr) => {
    if (!acc[curr.cateName]) {
      acc[curr.cateName] = [];
    }
    acc[curr.cateName].push(curr);
    return acc;
  }, {});

  return <div className='flex flex-col px-12 py-4 h-[100vh] w-full overflow-y-auto'>

    {/*banner*/}


    {/*card*/}
    <div className='flex flex-col gap-4'>
      {categories.map(category => {
        const sites = sitesMapper[category.name];
        return <div key={category.name} className='flex flex-col gap-2'>
          <div id={category.name} className='flex items-center gap-2 text-gray-600 cursor-default'>
            {category.icon}
            <span>{category.displayName}</span>
          </div>
          <div className='grid grid-cols-4 gap-4'>
            {sites.map((site, index) => <LinkCard key={index} site={site} />)}
          </div>
        </div>;
      })}
    </div>

  </div>;
};