import Link from 'next/link'
import React from 'react'
import CardInovation from '../ui/Inovation/CardInovation'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function Inovation() {
      return (
            <>
                  <main className='w-full h-auto py-[50px] bg-slate-100 overflow-hidden'>
                        <section className='container_section flex flex-col gap-y-[14px]'>
                              <div data-aos='fade-up' className='flex items-center justify-between'>
                                    <h2 className='font-quicksand font-bold lg:text-[24px] text-base lg:leading-[30px] leading-normal w-full lg:max-w-[70%] max-w-[80%]'>Inovasi Digital dalam Setiap Proyek</h2>
                                    <Link href='/' className='font-normal lg:text-base text-[8px] text-slate-400 hover:underline'>
                                          Lihat Semua
                                    </Link>
                              </div>
                              <div data-aos='fade-up' className='w-full grid grid-cols-1'>
                                    <div className='w-full col-span-1'>
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
                                                            slidesPerView: 3,
                                                            spaceBetween: 20,
                                                      },
                                                      768: {
                                                            slidesPerView: 3,
                                                            spaceBetween: 20,
                                                      },
                                                      1024: {
                                                            slidesPerView: 5,
                                                            spaceBetween: 24,
                                                      },
                                                      1280: {
                                                            slidesPerView: 5,
                                                            spaceBetween: 24,
                                                      },
                                                }}
                                                modules={[Pagination]}
                                                className="inovation-swiper w-full cursor-grab"
                                          >
                                                {Array.from({ length: 5 }).map((_, index) => (
                                                      <SwiperSlide className='pt-1 lg:pb-0 pb-10' key={index}>
                                                            <CardInovation
                                                                  key={index}
                                                                  link={'#'}
                                                                  image={'/assets/images/effect-paper.png'}
                                                                  category={'Desain Logo'}
                                                                  title={'Desain Logo Perusahaan, Bisnis, dan UMKM Professional'}
                                                            />
                                                      </SwiperSlide>
                                                ))}
                                          </Swiper>
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
