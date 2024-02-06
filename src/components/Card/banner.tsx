import { Banner } from '@/typings';
import React from 'react';

interface Props {
  banner: Banner;
}

export const BannerCard: React.FC<Props> = ({ banner }) => {
  return <a
    className='rounded p-4 flex gap-2 h-[72px] text-white items-center transition-all hover:-translate-y-1.5 hover:shadow-2xl'
    href={banner.url} target='_blank' style={{ backgroundColor: banner.color }}>
    <div>{banner.icon}</div>
    <span className='line-clamp-2 text-sm'>{banner.title}</span>
  </a>;
};