import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CardWhyExplain from '../ui/whyexplain/CardWhyExplain';
import Image from 'next/image';


export default function WhyExplain() {
      return (
            <>
                  <main className="w-full lg:mb-[168px] mb-[100px] overflow-hidden">
                        <section data-aos='fade-up' className="container_section lg:mb-[50px] mb-4">
                              <h2 className="font-quicksand font-bold lg:text-[36px] text-[24px] text-center">
                                    Mengapa Harus menggunakan Partner Kerja?
                              </h2>
                        </section>
                        <section className='w-full 2k:max-w-[1200px] 4k:max-w-[1200px] outlet2:max-w-[1440px] outlet:max-w-[1280px] md:max-w-[696px] max-w-none lg:ml-auto lg:mx-0 2k:mx-auto 4k:mx-auto mx-auto lg:pl-5 xl:pl-0 md:px-0 px-5 h-auto grid grid-cols-10 items-center gap-[30px]'>
                              {/* Left */}
                              <div data-aos='fade-right' className="lg:col-span-4 col-span-10 flex flex-col gap-y-[14px] z-10">
                                    <h2 className="font-quicksand font-bold lg:text-[24px] text-sm lg:leading-[30px] leading-normal text-center lg:text-start">
                                          Partner Kerja membantu Anda untuk memenuhi segala kebutuhan freelance Anda.
                                    </h2>
                                    <p className="font-normal lg:text-base text-xs text-slate-400 text-center lg:text-start">
                                          Temukan berbagai jasa untuk membantu pekerjaan Anda
                                    </p>
                              </div>
                              {/* Right */}
                              <div data-aos='fade-left' className='lg:col-span-6 col-span-10'>
                                    <div className='grid grid-cols-1'>
                                          <Swiper
                                                slidesPerView={1}
                                                spaceBetween={10}
                                                pagination={{
                                                      clickable: true,
                                                }}
                                                breakpoints={{
                                                      0: {
                                                            slidesPerView: 1.1,
                                                            spaceBetween: 10,
                                                      },
                                                      640: {
                                                            slidesPerView: 1.1,
                                                            spaceBetween: 14,
                                                      },
                                                      768: {
                                                            slidesPerView: 1.2,
                                                            spaceBetween: 14,
                                                      },
                                                      1024: {
                                                            slidesPerView: 1.2,
                                                            spaceBetween: 24,
                                                      },
                                                      1280: {
                                                            slidesPerView: 1.2,
                                                            spaceBetween: 24,
                                                      },
                                                }}
                                                className="explain-swiper w-full h-auto col-span-1 cursor-grab"
                                          >
                                                <SwiperSlide>
                                                      <CardWhyExplain
                                                            number={'01'}
                                                            title={'Beragam Pilihan Jasa'}
                                                            description={'Partner Kerja menyediakan berbagai layanan, mulai dari desain, video editing, digital marketing, hingga pengelolaan media sosial. Semua kebutuhan bisnis Anda tersedia dalam satu tempat.'}
                                                      >
                                                            <div className='group-hover:scale-105 duration-500 absolute lg:top-[50px] top-0 lg:-right-[150px] -right-[50px] w-full lg:max-w-[450px] max-w-[200px] h-auto z-[2] rotate-12'>
                                                                  <Image src='/assets/images/explain-01.png' alt='ornament' width={300} height={300} className='w-full h-full object-cover' />
                                                            </div>
                                                      </CardWhyExplain>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                      <CardWhyExplain
                                                            number={'02'}
                                                            title={'Harga Terjangkau untuk UMKM'}
                                                            description={'Kami menawarkan layanan berkualitas tinggi dengan harga yang bersahabat, dirancang khusus untuk mendukung pertumbuhan usaha kecil dan menengah.'}
                                                      >
                                                            <div className='group-hover:scale-105 duration-500 absolute lg:top-[50px] top-0 right-0 w-full lg:max-w-[450px] max-w-[150px] h-auto z-[2] rotate-0'>
                                                                  <Image src='/assets/images/explain-02.svg' alt='ornament' width={300} height={300} className='w-full h-full object-cover' />
                                                            </div>
                                                      </CardWhyExplain>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                      <CardWhyExplain
                                                            number={'03'}
                                                            title={'Tim Profesional dan Berpengalaman'}
                                                            description={'Semua pekerjaan ditangani oleh para ahli di bidangnya, memastikan Anda mendapatkan hasil terbaik untuk setiap layanan yang Anda pilih.'}
                                                      >
                                                            <div className='group-hover:scale-105 duration-500 absolute lg:top-[20px] -top-[10px] lg:-right-[70px] -right-10 w-full lg:max-w-[450px] max-w-[200px] h-auto z-[2] rotate-0'>
                                                                  <Image src='/assets/images/explain-03.svg' alt='ornament' width={300} height={300} className='w-full h-full object-cover' />
                                                            </div>
                                                      </CardWhyExplain>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                      <CardWhyExplain
                                                            number={'04'}
                                                            title={'Paket Lengkap dan Praktis'}
                                                            description={'Kami menawarkan paket all-in-one yang mencakup pembuatan logo, landing page, desain poster media sosial, dan banyak lagi. Solusi lengkap untuk mempermudah kebutuhan branding dan pemasaran Anda.'}
                                                      >
                                                            <div className='group-hover:scale-105 duration-500 absolute lg:top-1/2 top-0 lg:-translate-y-1/2 lg:-right-[100px] -right-[50px] w-full lg:max-w-[400px] max-w-[180px] h-auto z-[2] rotate-0'>
                                                                  <Image src='/assets/images/explain-04.svg' alt='ornament' width={300} height={300} className='w-full h-full object-cover' />
                                                            </div>
                                                      </CardWhyExplain>
                                                </SwiperSlide>
                                          </Swiper>
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
