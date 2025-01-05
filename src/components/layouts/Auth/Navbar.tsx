import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
      return (
            <nav className='fixed top-0 inset-x-0 w-full bg-slate-50 h-auto z-50'>
                  <div className='w-full h-auto lg:max-w-[1300px] md:max-w-[696px] max-w-none px-5 lg:px-0 mx-auto flex items-center justify-center lg:py-[22px] py-5'>
                        <Link href='/' className='w-auto h-auto block'>
                              <Image src='/assets/logo/logo-pk2.svg' alt='Logo' width={150} height={25} className='lg:w-[150px] w-[120px] h-auto' />
                        </Link>
                  </div>
            </nav>
      )
}
