'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { Rubik } from 'next/font/google';
import Dropdown from '../Dropdown/dropdown';
import { useAppStore } from '@/store/store';
import Link from 'next/link';

const rubik = Rubik({ subsets: ['latin'] });

export const Navbar = () => {
  const items = {
    label: 'Men',
    values: [
      { label: 'men 1', path: '/men1' },
      { label: 'men 2', path: '/men2' }
    ]
  };
  
  const items2 = {
    label: 'Women',
    values: [
      { label: 'women 1', path: '/women1' },
      { label: 'women 2', path: '/women2' }
    ]
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  const { totalItems } = useAppStore()

  return (
    <nav 
      className={`fixed z-50 h-14 top-0 left-0 right-0 m-4 ${toggleMenu ? 'rounded-t-xl' : 'rounded-xl'} md:rounded-xl md:mx-16 md:h-24`}
      style={{backgroundColor: 'rgba(250, 250, 250, 0.8)'}}
      >
      <div className='h-full'>
        <div className='flex items-center h-full justify-between mx-4'>
          <div className='hidden md:inline-block md:w-1/3'>
            <ul className={`flex text-darkGray font-semibold md:text-xs lg:text-base gap-2 ${rubik.className}`}>
              <li className='cursor-pointer'><Link href="/Listing">New 🔥</Link></li>
              <li><Dropdown items={items} /></li>
              <li><Dropdown items={items2} /></li>
            </ul>
          </div>

          <button className='md:hidden' onClick={() => setToggleMenu(!toggleMenu)}>
            <BiMenu className='w-5 h-5' />
          </button>

          <Link href="/">
            <Image src="/Logo.svg" alt="logo" width={80} height={20} className="md:w-[100px] lg:w-[138px] md:h-[32px]" />
          </Link>

          <div className='flex justify-end md:w-1/3'>
            <button className="mr-2">
              <BsSearch className='w-4 h-4 md:w-6 md:h-6' />
            </button>
            <button className="mx-2">
              <FaUser className='w-4 h-4 md:w-6 md:h-6' />
            </button>

          <Link href="/Cart">
            <div className='w-5 h-5 md:w-7 md:h-7 bg-yellow rounded-full flex items-center justify-center'>
              <span className='font-semibold text-darkGray text-sm'> {totalItems} </span>
            </div>
          </Link>
          </div>
        </div>

        {toggleMenu && (
          <div className='bg-faWhite absolute w-full rounded-b-xl py-2 px-4 left-0 md:hidden'>
            <ul className={`text-darkGray text-sm font-semibold divide-y-2 ${rubik.className}`}>
              <li className='cursor-pointer'><Link href="/Listing">New Drops 🔥</Link></li>
              <li><Dropdown items={items} /></li>
              <li><Dropdown items={items2} /></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
