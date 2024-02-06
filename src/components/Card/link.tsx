import { Site } from '@/typings';
import React, { useState } from 'react';
import classNames from 'classnames';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface Props {
  site: Site;
}

export const LinkCard: React.FC<Props> = ({ site }) => {

  // const [isHover, setIsHover] = useState(false);
  const [isError, setIsError] = useState(false);

  return <>
    <a
      className={classNames('flex items-center h-[88px] md:h-[72px] rounded bg-[var(--fh-color-bg-1)] p-3 md:p-4 gap-2 md:gap-4 cursor-pointer hover:-translate-y-1.5 hover:shadow-2xl dark:hover:border-blue-400 dark:hover:border-[1px] transition-shadow transition-transform')}
      href={site.url} target='_blank'
      //   onMouseOver={() => {
      //   setIsHover(true);
      // }} onMouseOut={() => {
      //   setIsHover(false);
      // }}
    >

      {/*{isHover && <div*/}
      {/*  className='absolute z-10 -top-1.5 left-0 min-h-[72px] w-full flex items-center rounded overflow-hidden bg-white p-4 gap-4 hover:shadow-2xl transition-all'>*/}
      {/*  <div className='rounded-xl min-w-[36px] w-[36px] overflow-hidden'>*/}
      {/*    <LazyLoadImage src={site.favicon} alt={`favicon-${site.name}`} />*/}
      {/*  </div>*/}
      {/*  <div className='flex flex-col justify-center'>*/}
      {/*    <span className='text-sm text-ellipsis text-gray-600 font-bold'>{site.name}</span>*/}
      {/*    <span className='text-xs text-ellipsis text-gray-500'>{site.desc}</span>*/}
      {/*  </div>*/}
      {/*</div>}*/}

      <div className='rounded-xl min-w-[36px] w-[36px] h-[36px] min-h-[36px] overflow-hidden bg-white'>
        <LazyLoadImage height={36} width={36} src={isError ? '/avatar.svg' : site.favicon} effect='opacity' placeholderSrc='/avatar.svg'
                       onError={() => {
                         setIsError(true);
                       }} />

      </div>
      <div className='flex flex-col justify-center'>
        <span className='text-sm text-ellipsis line-clamp-1 text-[var(--fh-color-text-0)] font-bold'>{site.name}</span>
        <span className='text-xs text-ellipsis line-clamp-3 md:line-clamp-2 text-[var(--fh-color-text-1)]'>{site.desc}</span>
      </div>
    </a>
  </>;
};