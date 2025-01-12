import InputSearchBranding from '@/components/material/InputSearchBranding'
import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination } from 'swiper/modules';
import CardCategoryBranding from '@/components/ui/category/CardCategoryBranding';
import AOS from 'aos';


export default function Category() {
      useEffect(() => {
            AOS.init({
                  duration: 800, // Durasi animasi (ms)
                  once: true,   // Pastikan animasi diputar ulang setiap kali elemen terlihat
            });
      }, []);
      return (
            <>
                  <main className="w-full h-auto overflow-hidden lg:mb-[70px] mb-[50px]">
                        <section data-aos='fade-up' className='container_section flex flex-col'>
                              <h2 className='font-quicksand font-bold lg:text-[36px] text-[24px] text-text-dark text-center lg:leading-[45px] leading-5 '>
                                    Temukan solusi desain terbaik untuk kebutuhan brand Anda
                              </h2>
                              <p className="font-normal lg:text-[20px] text-sm text-center mt-[14px]">
                                    Pilih kategori yang sesuai dan biarkan kami mewujudkan visi Anda.
                              </p>
                              <div className="w-full md:max-w-[656px] max-w-none mx-auto lg:my-[50px] my-[24px]">
                                    <InputSearchBranding
                                          name={'search'}
                                          id={'search'}
                                          placeholder={'Cari Jasa...'}
                                    />
                              </div>
                              <div className='w-full grid grid-cols-1'>
                                    <div className='w-full col-span-1'>
                                          <Swiper
                                                pagination={{
                                                      clickable: true,
                                                }}
                                                breakpoints={{
                                                      // Small screens
                                                      0: {
                                                            slidesPerView: 1,
                                                            spaceBetween: 14,
                                                            grid: {
                                                                  rows: 1,
                                                            },
                                                      },
                                                      320: {
                                                            slidesPerView: 1,
                                                            spaceBetween: 14,
                                                            grid: {
                                                                  rows: 1,
                                                            },
                                                      },
                                                      // Medium screens
                                                      640: {
                                                            slidesPerView: 1,
                                                            spaceBetween: 14,
                                                            grid: {
                                                                  rows: 1,
                                                            },
                                                      },
                                                      768: {
                                                            slidesPerView: 1,
                                                            spaceBetween: 14,
                                                            grid: {
                                                                  rows: 1,
                                                            },
                                                      },
                                                      // Large screens
                                                      1024: {
                                                            slidesPerView: 3,
                                                            spaceBetween: 24,
                                                            grid: {
                                                                  rows: 2,
                                                            },
                                                      },
                                                      1280: {
                                                            slidesPerView: 3,
                                                            spaceBetween: 24,
                                                            grid: {
                                                                  rows: 2,
                                                            },
                                                      },
                                                }}
                                                modules={[Grid, Pagination]}
                                                className="category-branding-swiper w-full h-[310px] md:h-[320px] tablet:h-[620px] lg:h-[450px] xl:h-[450px] pb-10"
                                          >
                                                {Array.from({ length: 10 }).map((_, index) => (
                                                      <SwiperSlide key={index}>
                                                            <CardCategoryBranding
                                                                  link={'/branding/1'}
                                                                  image={'/assets/images/brand-guidlines.png'}
                                                                  name={'Brand Guidlines'}
                                                                  rating={'4.9'}
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
