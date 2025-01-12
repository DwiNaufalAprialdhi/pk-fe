import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import CardInovation from '@/components/ui/Inovation/CardInovation';

export default function CategoryMore() {
      return (
            <>
                  <main className='w-full h-auto lg:mb-[50px] mb-6 overflow-hidden'>
                        <section className='w-full flex flex-col gap-y-[14px]'>
                              <div data-aos='fade-up' className='flex items-center justify-between'>
                                    <h2 className='font-quicksand font-bold lg:text-[24px] text-base lg:leading-[30px] leading-normal w-full lg:max-w-[70%] max-w-[80%]'>
                                          Lihat Kategori Produk Jasa Lainnya
                                    </h2>
                                    <Link href='#' className='font-normal lg:text-base text-[8px] text-slate-400 hover:underline'>
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
                                                className="inovation-swiper w-full cursor-grab"
                                          >
                                                {Array.from({ length: 5 }).map((_, index) => (
                                                      <SwiperSlide className='pt-1 pb-10' key={index}>
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
