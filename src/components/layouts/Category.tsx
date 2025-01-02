import React, { useEffect } from 'react'
import CardCategory from '../ui/category/CardCategory'
import Icon from '../Icon/Icon'
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
                  <main className='w-full h-auto lg:mt-[146px] mt-[100px] lg:mb-[190px] mb-[100px] overflow-hidden'>
                        <section className='container_section flex flex-col gap-y-[50px]'>
                              <div data-aos="fade-right" className='flex flex-col gap-y-[14px]'>
                                    <h2 className='font-quicksand font-bold lg:text-[48px] lg:leading-[60px] leading-normal text-[24px] w-full md:max-w-[516px] max-w-none'>Kategori Jasa yang Kami Tawarkan</h2>
                                    <p className='font-normal text-base text-slate-400'>Temukan berbagai jasa untuk membantu pekerjaan Anda</p>
                              </div>
                              <div data-aos="fade-left" className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6'>
                                    <CardCategory
                                          title='Desain Grafis & Branding'
                                          description='Desain logo, banner, poster, kemasan, dan lainnya'
                                    >
                                          <Icon.desain className='lg:w-[48px] w-[24px] lg:h-[48px] h-[24px] text-theme-primary_blue group-hover:text-slate-50 duration-300' />
                                    </CardCategory>
                                    <CardCategory
                                          title='Apps Development'
                                          description='Pembuatan website, aplikasi mobile, dan landingpage'
                                    >
                                          <Icon.apps className='lg:w-[48px] w-[24px] lg:h-[48px] h-[24px] text-theme-primary_blue group-hover:text-slate-50 duration-300' />
                                    </CardCategory>
                                    <CardCategory
                                          title='Digital Marketing'
                                          description='Iklan di sosmed, review marketplace, dan lainnya'
                                    >
                                          <Icon.horn className='lg:w-[48px] w-[24px] lg:h-[48px] h-[24px] text-theme-primary_blue group-hover:text-slate-50 duration-300' />
                                    </CardCategory>
                                    <CardCategory
                                          title='Sales'
                                          description='Meningkatkan penjualan produk'
                                    >
                                          <Icon.chart className='lg:w-[48px] w-[24px] lg:h-[48px] h-[24px] text-theme-primary_blue group-hover:text-slate-50 duration-300' />
                                    </CardCategory>
                              </div>
                        </section>
                  </main>
            </>
      )
}
