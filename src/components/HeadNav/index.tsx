import React from 'react';
import classNames from 'classnames';
import { FaQq } from 'react-icons/fa6';

interface Props {
  className?: string | undefined;
}

export const HeadNav: React.FC<Props> = ({ className }) => {
  return <div className={classNames('flex items-center justify-between px-6 py-2 shadow-md', className)}>
    <div className='h-[36px] w-[36px]'>
      <img src='/furryhome_white.png' height={36} width={36} alt='logo' />
    </div>
    <span>FurryHome 福瑞之家导航</span>
    <a
      className='h-[36px] w-[36px] flex justify-center items-center'
      href='https://qm.qq.com/cgi-bin/qm/qr?authKey=zWRs85uOZFkFQdoa754m4UvryCQAg%2FNB0S7XI1IcJ1s7igM49mJ1Vl%2BmO4QO%2FUPQ&k=fRZ6UMKRJvd9lhqB1d9MJWe9LR61J_3N&noverify=0'
      target='_blank'>
      <FaQq size={20} />
    </a>
  </div>;
};