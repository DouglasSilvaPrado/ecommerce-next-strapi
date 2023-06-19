'use client'


import Image from 'next/image'
import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { FaUser } from 'react-icons/fa'
import { BsSearch } from 'react-icons/bs'
import { Rubik } from 'next/font/google'
import Dropdown from '../Dropdown/dropdown'

const rubik = Rubik({ subsets: ['latin'] })


export const Navbar = () => {
  const items = { label: 'Men', values: 
    [
      {label: 'men 1', path: '/men1'}, 
      {label: 'men 2', path: '/men2'}
    ]
  }
  const items2 = { label: 'Women', values: 
    [
      {label: 'women 1', path: '/women1'}, 
      {label: 'women 2', path: '/women2'}
    ]
  }


  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className={`bg-faWhite h-14 ${toggleMenu ? 'rounded-t-xl' : 'rounded-xl'} relative md:rounded-xl px-4 md:px-16 mt-8 mb-6 md:h-24`}>
      <div className='flex items-center h-full justify-between mx-4'>

        <div className='hidden md:inline-block md:w-[18.75rem]'>
          <ul className={`flex text-darkGray font-semibold text-base gap-2 ${rubik.className}`}>
            <li>New Drops🔥</li>
            <li><Dropdown items={items} /> </li>
            <li><Dropdown items={items2} /></li>
          </ul>
        </div>

        <button className='md:hidden' onClick={() => setToggleMenu(!toggleMenu)}>
          <BiMenu className='w-5 h-5' />
        </button>

        <Image src="/Logo.svg" alt="logo" width={80}  height={20} className="md:w-[128px] md:h-[32px]"/>

        <div className='flex justify-end md:w-[18.75rem]'>
          <button className="mr-2">
            <BsSearch className='w-4 h-4 md:6 md:h-6' />
          </button>
          <button className="mx-2">
            <FaUser className='w-4 h-4 md:6 md:h-6' />
          </button>

          <div className='w-5 h-5 md:w-7 md:h-7 bg-yellow rounded-full flex items-center justify-center '>
            <span className='font-semibold text-darkGray text-sm'>0</span>
          </div>
        </div>
      </div>
      {toggleMenu &&
        <div className='bg-faWhite absolute w-full rounded-b-xl py-2 px-4 left-0 md:hidden'>
          <ul className={`text-darkGray text-sm font-semibold divide-y-2 ${rubik.className}`}>
            <li>New Drops 🔥</li>
            <li><Dropdown items={items} /> </li>
            <li><Dropdown items={items2} /></li>
          </ul>
        </div>
      }
    </nav>  
  )
}
