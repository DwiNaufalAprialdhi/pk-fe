import Image from 'next/image'
import React from 'react'
import MoreUser from '../ui/hero/MoreUser'
import Review from '../ui/hero/Review'
import ButtonIcon from '../ui/hero/ButtonIcon'
import Icon from '../Icon/Icon'
import BadgeCategory from '../ui/hero/BadgeCategory'

export default function Hero() {
      return (
            <>
                  <main className='w-full h-auto overflow-x-hidden relative'>
                        {/* Hero Background */}
                        <div className='w-full h-full absolute top-0 inset-x-0 z-[2] bg-gradient-to-r from-theme-primary_blue via-theme-primary_blue/95 to-transparent'></div>
                        <div className='w-full h-full absolute top-0 inset-x-0 z-[1]'>
                              <Image src="/assets/images/hero-right.png" alt="Hero Background" width={1440} height={863} className='w-full h-full object-cover' />
                        </div>

                        <section className='container_section grid lg:grid-cols-2 grid-cols-1 relative lg:pt-[219px] lg:pb-[188px] pt-[130px] pb-[100px] z-[3]'>
                              {/* left */}
                              <div className='w-full col-span-1 flex flex-col'>
                                    <MoreUser />
                                    <Review className='my-[14px]' />
                                    <h2 className='font-quicksand font-bold lg:text-[48px] text-[24px] text-slate-50 mb-[14px]'>Solusi Digitalisasi Terbaik untuk Bisnis Anda:</h2>
                                    <p className='font-normal lg:text-[20px] text-base text-slate-50 lg:mb-[50px] mb-[14px]'>Temukan Partner Kerja Terpercaya Anda Sekarang</p>
                                    <ButtonIcon className="mb-6" link='#' title='Hubungi Kami'>
                                          <Icon.phone className='lg:w-[24px] w-4 lg:h-[24px] h-4 text-slate-50' />
                                    </ButtonIcon>
                                    <div className='flex lg:flex-row flex-col lg:items-start items-center lg:justify-start justify-center gap-[14px]'>
                                          <h2 className='font-normal lg:text-base text-sm text-slate-50'>Jasa yang tersedia:</h2>
                                          <div className='flex flex-col lg:items-start lg:justify-start items-center justify-center gap-y-[14px]'>
                                                <div className='flex flex-wrap items-center lg:justify-start justify-center gap-[10px]'>
                                                      <BadgeCategory title='Website' />
                                                      <BadgeCategory title='Mobile App' />
                                                      <BadgeCategory title='Desain Logo' />
                                                      <BadgeCategory title='Digital Marketing' />
                                                </div>
                                                <h2 className='font-normal lg:text-base text-sm text-slate-50'>dan 50+ jasa lainnya</h2>
                                          </div>
                                    </div>
                              </div>
                              {/* right */}
                              <div className='w-full col-span-1 h-0'></div>
                        </section>
                  </main>
            </>
      )
}
