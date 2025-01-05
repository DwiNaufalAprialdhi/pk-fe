import Icon from '@/components/Icon/Icon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

type LayoutsAuthProps = {
      children?: React.ReactNode
}

export default function LayoutsAuth(props: LayoutsAuthProps) {
      return (
            <>
                  <Navbar />
                  <main className='w-full h-auto bg-slate-50'>
                        <section className='w-full min-h-screen lg:max-w-[1200px] xl:max-w-[1300px] md:max-w-[696px] max-w-none mx-auto lg:px-0 px-5 lg:pt-[109px] pt-[100px] lg:pb-[62px] pb-[50px] grid grid-cols-2 items-center lg:gap-20 gap-5 relative'>
                              {/* Left */}
                              <div className='w-full h-auto lg:col-span-1 col-span-2 grid grid-cols-1 rounded-[16px] overflow-hidden'>
                                    <div className='w-full h-auto col-span-1 rounded-[16px] overflow-hidden relative'>
                                          {/* Button */}
                                          <Link href='/' className='absolute top-3 right-3 w-max bg-[#33415540]/20 flex items-center gap-x-2 lg:py-[11px] py-2 lg:px-[22px] px-4 rounded-full group z-[5]'>
                                                <h2 className='font-normal lg:text-xs text-[10px] text-slate-50'>Kembali ke website</h2>
                                                <Icon.arrowRight className='lg:w-[16px] lg:h-[16px] w-3 h-3 text-slate-50 group-hover:translate-x-1 duration-300' />
                                          </Link>
                                          {/* Text */}
                                          <div className='absolute lg:top-[80px] top-[55px] left-1/2 -translate-x-1/2 w-full h-auto lg:max-w-[288px] max-w-[150px] z-[5]'>
                                                <h2 className='font-normal lg:text-[24px] lg:leading-8 leading-normal text-sm text-center text-slate-50'>
                                                      Bantu Membangun Brand Bisnis Anda
                                                </h2>
                                          </div>
                                          {/* Image Desktop */}
                                          <Image src='/assets/images/product-1.svg' alt='Products' width={567} height={571} className='hidden lg:block w-full h-auto object-cover' />
                                          {/* Image Mobile dan Tablet */}
                                          <Image src='/assets/images/product-2.svg' alt='Products' width={300} height={300} className='block lg:hidden w-full h-auto object-cover' />
                                    </div>
                              </div>
                              {/* Right */}
                              <div className='w-full h-auto lg:col-span-1 col-span-2'>
                                    {props.children}
                              </div>
                        </section>
                        <Footer />
                  </main>
            </>
      )
}
