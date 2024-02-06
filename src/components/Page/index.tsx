import React from 'react';
import { categories } from '@/assets/categories.tsx';
import sites from '@/assets/sites.json';
import { Site } from '@/typings';
import { LinkCard } from '@/components/Card/link.tsx';
import { banners } from '@/assets/banners.tsx';
import { BannerCard } from '@/components/Card/banner.tsx';

export const Page: React.FC = () => {

  const sitesMapper: Record<string, Site[]> = (sites as Site[]).reduce((acc: Record<string, Site[]>, curr) => {
    if (!acc[curr.cateName]) {
      acc[curr.cateName] = [];
    }
    acc[curr.cateName].push(curr);
    return acc;
  }, {});

  return <div className='flex flex-col px-3 md:px-12 py-4 h-[100vh] w-full overflow-y-auto gap-4'>

    {/*banner*/}
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {banners.sort(() => Math.random() - 0.5).map(banner => <BannerCard banner={banner} />)}
    </div>


    {/*card*/}
    <div className='flex flex-col gap-4'>
      {categories.map(category => {
        const sites = sitesMapper[category.name];
        return <div key={category.name} className='flex flex-col gap-2'>
          <div id={category.name} className='flex items-center gap-2 text-gray-600 cursor-default'>
            {category.icon}
            <span>{category.displayName}</span>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {sites.sort(() => Math.random() - 0.5).map((site, index) => <LinkCard key={index} site={site} />)}
          </div>
        </div>;
      })}
    </div>

  </div>;
};