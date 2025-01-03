import Image from 'next/image'
import React from 'react'
import Button from '../material/Button'
import Link from 'next/link'
import Icon from '../Icon/Icon'
import Badge from '../ui/packet/Badge'
import Require from '../ui/packet/Require'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function Packet() {
      return (
            <>
                  <main className='w-full h-auto relative overflow-hidden'>
                        {/* Effect */}
                        <div className='absolute top-0 bottom-0 inset-x-0 w-full h-full z-[1]'>
                              <Image src='/assets/images/effect-paper-big.png' width={1000} height={1000} alt='Packet Effect' className='w-full h-full object-cover' />
                        </div>
                        <section className='container_section lg:py-[146px] py-[50px] lg:pb-[190px] pb-[50px] relative z-[2]'>
                              {/* Header */}
                              <div data-aos='fade-up' className='w-full max-w-[809px] mx-auto flex flex-col items-center justify-center text-slate-50'>
                                    <p className='font-normal lg:text-base text-xs text-center lg:mb-[14px] mb-0 lg:order-1 order-2'><span className='font-semibold'>Ingin Custom Project sepuasnya?</span> Kami punya solusinya!</p>
                                    <h1 className='font-quicksand font-bold lg:text-[48px] text-[24px] lg:leading-[60px] leading-normal text-center lg:order-2 lg:mb-0 mb-3 order-1'>Lebih Mudah Buat Bisnis dengan Paket All-in-One</h1>
                                    <p className='w-full md:max-w-[479px] max-w-none font-normal lg:text-base text-xs text-center text-slate-200 mt-[14px] mb-6 order-3'>
                                          Produk layanan ini meliputi pembuatan logo, kartu nama, landingpage dll sesuai dengan kebutuhan, dan terdiri dari paket
                                    </p>
                              </div>
                              <div data-aos='fade-up' className='w-full flex items-center justify-center gap-[14px] mb-[50px]'>
                                    <Link href='#' className='block w-full max-w-[224px]'>
                                          <Button type={'button'} className='w-full max-w-[224px]'>
                                                Pilih Paket
                                          </Button>
                                    </Link>
                                    <Link href={'#'} type='button' className={`w-full max-w-[224px] lg:p-[15px] p-3 flex items-center justify-center lg:gap-2 gap-1 bg-transparent rounded-[8px] hover:bg-opacity-80 duration-300 group`}>
                                          <h2 className='font-semibold lg:text-sm text-xs text-slate-50'>Lihat Paket Lainnya</h2>
                                          <Icon.arrowRight className='lg:w-6 w-4 lg:h-6 h-4 text-slate-50 group-hover:translate-x-1 duration-300' />
                                    </Link>
                              </div>
                              {/* Cards */}
                              <div data-aos='fade-up' className='w-full grid grid-cols-1 items-center justify-center gap-[24px]'>
                                    <Swiper
                                          slidesPerView={1}
                                          spaceBetween={10}
                                          pagination={{
                                                clickable: true,
                                          }}
                                          loop={true}
                                          breakpoints={{
                                                0: {
                                                      slidesPerView: 1.1,
                                                      spaceBetween: 10,
                                                },
                                                320: {
                                                      slidesPerView: 1.1,
                                                      spaceBetween: 10,
                                                },
                                                640: {
                                                      slidesPerView: 2,
                                                      spaceBetween: 20,
                                                },
                                                768: {
                                                      slidesPerView: 2,
                                                      spaceBetween: 20,
                                                },
                                                1024: {
                                                      slidesPerView: 3,
                                                      spaceBetween: 24,
                                                },
                                                1280: {
                                                      slidesPerView: 3,
                                                      spaceBetween: 24,
                                                },
                                          }}
                                          modules={[Pagination]}
                                          className="packet-swiper w-full cursor-grab"
                                    >
                                          <SwiperSlide className='pb-12 lg:pb-0 lg:pt-[47px]'>
                                                {/* Card Started */}
                                                <Link href={'#'} className='w-full bg-white h-auto lg:p-[30px] p-5 rounded-[16px] flex flex-col group hover:bg-theme-primary_blue duration-300 hover:border hover:border-white border border-white relative overflow-hidden'>
                                                      {/* Layer */}
                                                      <div className='absolute top-0 inset-x-0 w-full h-full opacity-0 group-hover:opacity-100 duration-500 bg-gradient-to-b from-theme-primary_blue via-theme-primary_blue to-text-dark z-[1]'></div>
                                                      <div className='flex flex-col relative z-[2]'>
                                                            {/* Badge */}
                                                            <Badge title='Started' className='mb-[14px]'></Badge>
                                                            {/* Desc */}
                                                            <h2 className='font-normal lg:text-base text-xs text-slate-400 group-hover:text-slate-50 duration-500 mb-6'>Produk layanan ini meliputi pembuatan logo, kartu nama, landingpage dll sesuai dengan kebutuhan, dan terdiri dari paket</h2>
                                                            {/* Amount */}
                                                            <h2 className="flex items-baseline font-bold mb-6 pb-3 border-b group-hover:text-slate-50 duration-500 border-slate-200">
                                                                  <span className="lg:text-[24px] text-base self-start">Rp.</span>
                                                                  <span className="lg:text-[48px] text-[24px] mx-1">100</span>
                                                                  <span className="lg:text-[24px] text-base self-end">rb</span>
                                                            </h2>
                                                            {/* Require */}
                                                            <div className='flex flex-col gap-y-[14px]'>
                                                                  <Require title='Desain Logo' />
                                                                  <Require title='Brand Guidelines' />
                                                                  <Require title='Landingpage' />
                                                                  <Require title='Digital Ads' />
                                                                  <Require title='Media Sosial' />
                                                            </div>
                                                      </div>
                                                </Link>
                                          </SwiperSlide>

                                          <SwiperSlide className='pb-12 lg:pb-0'>
                                                {/* Card Standar */}
                                                <Link href={'#'} className='w-full bg-white h-auto lg:p-[30px] lg:pb-[150px] p-5 rounded-[16px] flex flex-col group hover:bg-theme-primary_blue duration-300 hover:border hover:border-white border border-white relative overflow-hidden'>
                                                      {/* Layer */}
                                                      <div className='absolute top-0 inset-x-0 w-full h-full opacity-0 group-hover:opacity-100 duration-500 bg-gradient-to-b from-theme-primary_blue via-theme-primary_blue to-text-dark z-[1]'></div>
                                                      <div className='flex flex-col relative z-[2]'>
                                                            {/* Badge */}
                                                            <Badge title='Standar' className='mb-[14px]'></Badge>
                                                            {/* Desc */}
                                                            <h2 className='font-normal lg:text-base text-xs text-slate-400 group-hover:text-slate-50 duration-500 mb-6'>Produk layanan ini meliputi pembuatan logo, kartu nama, landingpage dll sesuai dengan kebutuhan, dan terdiri dari paket</h2>
                                                            {/* Amount */}
                                                            <h2 className="flex items-baseline font-bold mb-6 pb-3 border-b group-hover:text-slate-50 duration-500 border-slate-200">
                                                                  <span className="lg:text-[24px] text-base self-start">Rp.</span>
                                                                  <span className="lg:text-[48px] text-[24px] mx-1">110</span>
                                                                  <span className="lg:text-[24px] text-base self-end">jt</span>
                                                                  <span className="font-normal lg:text-base text-sm self-end">/2 Orang</span>
                                                            </h2>
                                                            {/* Require */}
                                                            <div className='flex flex-col gap-y-[14px]'>
                                                                  <Require title='Desain Logo' />
                                                                  <Require title='Brand Guidelines' />
                                                                  <Require title='Landingpage' />
                                                                  <Require title='Digital Ads' />
                                                                  <Require title='Media Sosial' />
                                                            </div>
                                                      </div>
                                                </Link>

                                          </SwiperSlide>

                                          <SwiperSlide className='pb-12 lg:pb-0 lg:pt-[47px]'>
                                                {/* Card Professional */}
                                                <Link href={'#'} className='w-full bg-white h-auto lg:p-[30px] p-5 rounded-[16px] flex flex-col group hover:bg-theme-primary_blue duration-300 hover:border hover:border-white border border-white relative overflow-hidden'>
                                                      {/* Layer */}
                                                      <div className='absolute top-0 inset-x-0 w-full h-full opacity-0 group-hover:opacity-100 duration-500 bg-gradient-to-b from-theme-primary_blue via-theme-primary_blue to-text-dark z-[1]'></div>
                                                      <div className='flex flex-col relative z-[2]'>
                                                            {/* Badge */}
                                                            <Badge title='Professional' className='mb-[14px]'>
                                                                  <Icon.king className='w-4 h-4' />
                                                            </Badge>
                                                            {/* Desc */}
                                                            <h2 className='font-normal lg:text-base text-xs text-slate-400 group-hover:text-slate-50 duration-500 mb-6'>Produk layanan ini meliputi pembuatan logo, kartu nama, landingpage dll sesuai dengan kebutuhan, dan terdiri dari paket</h2>
                                                            {/* Amount */}
                                                            <h2 className="flex items-baseline font-bold mb-6 pb-3 border-b group-hover:text-slate-50 duration-500 border-slate-200">
                                                                  <span className="lg:text-[24px] text-base self-start">Rp.</span>
                                                                  <span className="lg:text-[48px] text-[24px] mx-1">200</span>
                                                                  <span className="lg:text-[24px] text-base self-end">jt</span>
                                                                  <span className="font-normal lg:text-base text-sm self-end">/5 Orang</span>
                                                            </h2>
                                                            {/* Require */}
                                                            <div className='flex flex-col gap-y-[14px]'>
                                                                  <Require title='Desain Logo' />
                                                                  <Require title='Brand Guidelines' />
                                                                  <Require title='Landingpage' />
                                                                  <Require title='Digital Ads' />
                                                                  <Require title='Media Sosial' />
                                                            </div>
                                                      </div>
                                                </Link>
                                          </SwiperSlide>
                                    </Swiper>
                              </div>
                        </section>
                  </main>
            </>
      )
}
