import React from 'react'
import Button from '../material/Button'
import Link from 'next/link'
import Image from 'next/image'

export default function Banner() {
      return (
            <>
                  <main className='w-full mb-[50px] h-auto'>
                        <section className='container_section'>
                              {/* Box Banner */}
                              <div data-aos='fade-up' className='w-full lg:h-[300px] h-[200px] rounded-[16px] relative bg-theme-primary_blue lg:p-[30px] p-5 flex flex-col lg:items-start items-center justify-center'>
                                    {/* Effect */}
                                    <div className='absolute top-0 inset-x-0 w-full h-full z-[1]'>
                                          <Image src='/assets/images/effect-paper.png' width={800} height={300} alt='shape' className='w-full h-full object-cover rounded-[16px]' />
                                    </div>
                                    {/* Title */}
                                    <h2 className='font-quicksand font-semibold lg:text-[24px] text-base text-slate-50 mb-[14px] lg:text-start text-center relative z-[2]'>Join our weekly newsletter</h2>
                                    <p className='font-normal lg:text-base text-sm text-slate-200 lg:text-start text-center lg:mb-[34px] mb-[24px] relative z-[2]'>Stay up to date with the lastest news, announcements, and articles.</p>
                                    <div className='w-full max-w-[367px] relative z-[2]'>
                                          <input type="text" className='w-full lg:py-[15px] py-3 lg:rounded-2xl rounded-lg pl-[10px] pr-[110px] outline-none font-normal text-sm text-slate-400' placeholder='Enter your email' />
                                          <Link href='/' className='absolute top-1/2 -translate-y-1/2 right-[5px] w-max block'>
                                          <Button type={'button'}>Subscribe</Button>
                                          </Link>
                                    </div>
                                    {/* Ornament Phone */}
                                    <div className='w-full hidden lg:block max-w-[503px] h-auto absolute bottom-0 right-0 z-[2]'>
                                          <Image src='/assets/images/banner-phone.svg' width={503} height={503} alt='shape' className='w-full h-auto object-cover' />
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
