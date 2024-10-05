  'use client'
  import React from 'react'
  import Link from 'next/link'
  const Footer = () => {
    return (
      <div>
        <div className="pt-16 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 lg:px-8">
          <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4 font-semibold">
            <div className="sm:col-span-2">
              <Link href="/" aria-label="Go home" title="Opssy blog" className="">
                <span className="ml-2 text-violet-600 text-2xl uppercase font-bold tracking-wide">
                  Opssy Blog
                </span>
                Logo
              </Link>
              <div className="mt-6 lg:max-w-sm">
                <p className="text-sm text-gray-800">Everything related to programming</p>
                <p className="mt-4 text-sm text-gray-800">Everything related to programming</p>
              </div> 
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-base font-bold tracking-wide text-gray-900">Contacts</p>
              <div className="flex">
                <p>Phone:</p>
                <Link
                  href="+23475838484"
                  aria-label="my phone number"
                  title="my phone number"
                  className="transition-colors duration-300 text-secondary hover:text-violet-400"
                >
                  +23475838484
                </Link>
                <br />
              </div>
              <div className="flex">
                <p>Email:</p>
                <Link
                  href="mailto:opssy@gmail.com"
                  aria-label="my phone number"
                  title="my phone number"
                  className="transition-colors duration-300 text-secondary hover:text-violet-400"
                >
                  opssy@gmail.com
                </Link>
              </div>
            </div>
            <p>
              <span className="text-violet-500">Developer</span> |
              <span className="text-violet-500">Speaker</span> |
              <span className="text-violet-500">Author</span> |
            </p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Footer