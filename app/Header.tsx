import React from 'react'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'
import NavLinks from './NavLinks'
import SearchBox from './SearchBox'


const Header = () => {
  return (
    <header>
      <div className='grid grid-cols-3 p-10 items-center'>
        <div className='flex items-center'>
          <FaBars className='h-8 w-8 cursor-pointer' />
        </div>
        <div className='text-center'>
          <Link href='/' prefetch={false}>
            <h1 className='font-serif text-4xl'>
              The {" "}<span className='underline decoration-6 decoration-purple-400'>{" "}BITS</span>{" " } News
            </h1>
          </Link>
        </div>
        <div className='  flex space-x-2 items-center justify-end'>
        
          {/* dark mode */}
          <button className= 'bg-slate-900  md:block hidden text-white lg:px-2 lg:py-4 px-4 rounded-full dark:bg-slate-800'>
            Subscribe
          </button>
        </div>
      </div>
      <NavLinks/>
      <SearchBox/>
    </header>
  )
}

export default Header
