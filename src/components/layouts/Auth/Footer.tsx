import Icon from '@/components/Icon/Icon'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
      return (
            <>
                  <footer className='w-full h-max border-t border-slate-400'>
                        <div className='w-full h-max lg:max-w-[1200px] xl:max-w-[1300px] md:max-w-[696px] max-w-none px-5 lg:px-0 mx-auto lg:py-[22px] py-5 flex lg:flex-row flex-col lg:gap-0 gap-4 items-center lg:justify-between justify-center'>
                              <h2 className='font-normal lg:text-sm text-xs text-slate-400 lg:text-start text-center'>Copyright © Partnerkerja.id 2024, all rights reserved </h2>
                              <div className='flex items-center lg:gap-x-6 gap-4'>
                                    <Link href='#' className='block lg:hover:-translate-y-1 duration-300'>
                                          <Icon.instagram className='lg:w-[24px] w-4 lg:h-[24px] h-4 text-slate-400' />
                                    </Link>
                                    <Link href='#' className='block hover:-translate-y-1 duration-300'>
                                          <Icon.facebook className='lg:w-[24px] w-4 lg:h-[24px] h-4 text-slate-400' />
                                    </Link>
                                    <Link href='#' className='block hover:-translate-y-1 duration-300'>
                                          <Icon.tiktok className='lg:w-[24px] w-4 lg:h-[24px] h-4 text-slate-400' />
                                    </Link>
                                    <Link href='#' className='block hover:-translate-y-1 duration-300'>
                                          <Icon.threads className='lg:w-[24px] w-4 lg:h-[24px] h-4 text-slate-400' />
                                    </Link>
                              </div>
                        </div>
                  </footer>
            </>
      )
}
