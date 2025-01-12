import Icon from '@/components/Icon/Icon'
import React from 'react'
import ButtonPrimary from '../Auth/ButtonPrimary'
import Link from 'next/link'
import Image from 'next/image'

export default function Packet() {
      return (
            <>
                  <main className="w-full h-auto overflow-hidden lg:mb-[150px] mb-[50px]">
                        <section className='container_section grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-[80px] gap-[24px]'>
                              {/* Left */}
                              <div data-aos='fade-right' className='w-full lg:max-w-[450px] max-w-none col-span-1 flex flex-col order-2 lg:order-1'>
                                    <h2 className="font-semibold lg:text-base text-sm text-slate-500 mb-[14px]">
                                          Ingin Custom Project sepuasnya? <span className='font-normal'>Kami punya solusinya!</span>
                                    </h2>
                                    <h2 className="font-quicksand font-bold lg:text-[48px] text-[24px] lg:leading-[60px] leading-[30px] mb-[14px] text-slate-800">
                                          Pakai fitur Paket All-in-One
                                    </h2>
                                    <p className='font-normal lg:text-base text-sm text-slate-500 mb-[24px]'>
                                          Produk layanan ini meliputi pembuatan logo, kartu nama, landingpage dll sesuai dengan kebutuhan, dan terdiri dari paket
                                    </p>
                                    <div className='flex items-center gap-2 lg:mb-[50px] mb-[24px]'>
                                          <div className='flex items-center gap-x-[2px]'>
                                                <Icon.stars className='w-[20px] h-[20px] text-[#FACC15]' />
                                                <Icon.stars className='w-[20px] h-[20px] text-[#FACC15]' />
                                                <Icon.stars className='w-[20px] h-[20px] text-[#FACC15]' />
                                                <Icon.stars className='w-[20px] h-[20px] text-[#FACC15]' />
                                                <Icon.stars className='w-[20px] h-[20px] text-[#FACC15]' />
                                          </div>
                                          <h2 className='font-semibold lg:text-[24px] text-sm text-slate-800'>5.0</h2>
                                          <h2 className='font-normal lg:text-[24px] text-sm'>average rating</h2>
                                    </div>
                                    <div className='items-center grid grid-cols-2 gap-x-[14px]'>
                                          <Link href='#' className="w-full col-span-1 block">
                                                <ButtonPrimary>
                                                      Pilih Paket
                                                </ButtonPrimary>
                                          </Link>
                                          <Link href='#' className="w-full col-span-1 block">
                                                <button type='button' className='w-full p-[15px] flex items-center justify-center bg-transparent gap-2 text-theme-primary_blue font-normal lg:text-sm text-xs rounded-[8px] hover:bg-opacity-80 duration-300 group'>
                                                      Lihat Paket Lainnya
                                                      <Icon.arrowRight className='w-[24px] h-[24px] group-hover:-translate-x-1 transition_menu 1ext-theme-primary_blue' />
                                                </button>
                                          </Link>
                                    </div>
                              </div>
                              {/* Right */}
                              <div data-aos='fade-left' className="w-full lg:h-[392px] h-[180px] rounded-[16px] col-span-1 overflow-hidden group order-1 lg:order-2">
                                    <Image src='/assets/images/craft-paper.png' alt='packet' width={600} height={392} className='w-full h-full object-cover group-hover:scale-105 duration-500 transition-all ease-in-out transform' />
                              </div>
                        </section>
                  </main>
            </>
      )
}
