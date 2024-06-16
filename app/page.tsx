'use client';
import Image from 'next/image';
import {
  MdMenu,
  MdHome,
  MdVideogameAsset,
  MdAccountCircle,
  MdOutlineStar,
} from 'react-icons/md';
import { sen } from '@/app/fonts';
import { useEffect, useMemo, useState } from 'react';
export const runtime = 'edge';

export default function Mobile() {
  const navBorderColor = () => {
    return `
    bg-accent-500
animate-gradient-x`;
  };
  const [_, setIntv] = useState<any>(null);
  const document = typeof window !== 'undefined' ? window.document : null;

  useEffect(() => {
    const new_intv = setInterval(()=>{
      console.log("test");
            var link = document?.querySelector("link[rel~='icon']");
      if (!link) {
          link = document!.createElement('link');
          link.rel = 'icon';
          document!.head.appendChild(link);
      }
      if (document?.hasFocus()) {
      link.href = '/favicon-on.png' ;

      } else {
      link.href = '/favicon-off.png';

      }
    }, 50);
    setIntv(new_intv);
    return () => {
      setIntv((prev_intv: any)=>{
        clearInterval(prev_intv);
        return null;
      }
      );
    };
  }, [document]);

  return (
    <>
    <link rel="icon" type="image/png" href="favicon-on.png" sizes="any" />
    <div className='flex flex-col h-[100dvh] w-[100dvw] bg-bg-400 antialiased'>
      <nav className='h-14 w-full'>
        <div className='px-4 flex w-full mx-auto h-full items-center justify-between'>
          <img src='/logo.svg' className='w-[111px] h-[]' alt='logo' />
          <div className='flex justify-center'>
            <MdMenu color='#4C6477' size='36px' />
          </div>
        </div>
      </nav>
      <main
        className={`flex flex-1 flex-col w-full ${navBorderColor()} rounded-xl py-[2px]`}>
        <div className='flex flex-1 flex-col w-full bg-bg-100 rounded-xl'>
          <div className='flex flex-col w-full py-10 px-10  justify-center items-center'></div>
          <div className='flex flex-col w-full h-full px-10 pb-10 justify-center items-center gap-3'></div>
        </div>
      </main>
      <nav className='h-14 w-full'>
        <div className='flex w-full mx-auto h-full items-center justify-between px-8'>
          <MdHome color='#4C6477' size='36px' />
          <MdVideogameAsset color='#B8DFFF' size='36px' />
          <MdAccountCircle color='#4C6477' size='36px' />
        </div>
      </nav>
    </div></>
  );
}
