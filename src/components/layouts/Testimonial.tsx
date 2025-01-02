import React from 'react'
import Icon from '../Icon/Icon'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import CardTestimonial from '../ui/testimonial/CardTestimonial';

export default function Testimonial() {
      return (
            <>
                  <main className='w-full bg-white lg:pt-[150px] pt-[50px] lg:pb-[120px] pb-[50px]'>
                        <section className='container_section flex flex-col'>

                              {/* Header */}
                              <div data-aos='fade-up' className='w-full md:max-w-[448px] max-w-none mx-auto flex flex-col gap-y-[14px] mb-[50px]'>
                                    <h2 className='font-quicksand font-bold lg:text-[36px] text-[24px] text-center'>Testimoni Klien Tentang Layanan Partner Kerja</h2>
                                    <div className='flex items-center justify-center gap-[14px]'>
                                          <h2 className='flex items-center font-normal lg:text-base text-sm'>
                                                <Icon.stars className='w-4 h-auto text-[#FACC15]' />
                                                4.9
                                                <span className='text-text-secondary'>/5.0</span>
                                          </h2>
                                          <h2 className='font-normal lg:text-base text-sm text-text-secondary'>101,000+ jasa terjual</h2>
                                    </div>
                              </div>

                              {/* Testimonial */}
                              <div data-aos='fade-up' className='w-full grid grid-cols-1'>
                                    <div className='w-full h-auto col-span-1'>
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
                                                className="testimonial-swiper w-full cursor-grab"
                                          >
                                                {Array.from({ length: 6 }).map((_, index) => (
                                                      <SwiperSlide className='pt-1 pb-12' key={index}>
                                                            <CardTestimonial
                                                                  desc={'“Lorem ipsum dolor sit amet consectetur. Eget habitant eu mauris in ac. Scelerisque lectus pellentesque arcu bibendum in posuere quis quis enim.”'}
                                                                  name={'Upay Murphy'}
                                                                  job={'CEO PT. Mencari Cinta Sejati'}
                                                                  img={'/assets/images/pay.jpg'}
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
