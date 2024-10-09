"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Bars3BottomRightIcon,XMarkIcon } from '@heroicons/react/16/solid'
import { LinkIcon } from '@heroicons/react/24/solid'
import { link } from 'fs'
type MenuItem = {
 title: string;
 route: string;
 children?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "About",
    route: "/about",
  },
  {
    title: "Programming",
    route: "/programming",
  },
  {
    title: "Contact",
    route: "/contact",
  },
]
const Navbar:React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
  return (
    <div>
        <div>
            <div className='shadow-md w-full top-0 left-0 z-50'> 
                <div className='md:flex items-center justify-between bg-white py-4 md:py-10 px-7'>
                    <div>
                      <Link href='/' className='cursor-pointer'>
                      <span>Opssy Blog</span>
                      </Link>
                    </div>
                    {/* //Navabar icon */}
                    <div onClick={() => setIsMenuOpen(!isMenuOpen)}
                     className='absolute right-8 top-6 cursor-pointer w-7 h-7 z-50 lg:hidden'
                    >
                        {isMenuOpen ? <XMarkIcon className='w-6 h-6'/> : <Bars3BottomRightIcon className='w-6 h-6'/>}
                    </div>
                    <div className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-9 pt-8 transition-all duration-500 ease-in ${isMenuOpen ? "top-18" : "top-[-490px]"}`}>
                        {menuItems.map((item, index) =>{
                            return(
                                <Link href={item.route || ""}
                                key={`link-${index}`}
                                className="md:ml-8 md:my-0 my-7 font-medium text-xl uppercase hover:text-violet-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-300 duration-100 flex items-center"
                                >
                                    <span>{item.title}</span>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar