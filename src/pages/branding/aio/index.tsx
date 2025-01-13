import Icon from '@/components/Icon/Icon'
import Navbar from '@/components/layouts/Branding/Navbar'
import Footer from '@/components/layouts/Footer'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import AOS from 'aos';
import Review from '@/components/layouts/Branding/Review'
import CategoryMore from '@/components/layouts/Branding/CategoryMore'
import TabAio from '@/components/layouts/Branding/TabAio'


export default function Index() {
      useEffect(() => {
            AOS.init({
                  duration: 800, // Durasi animasi (ms)
                  once: true,   // Pastikan animasi diputar ulang setiap kali elemen terlihat
            });
      }, []);
      return (
            <>
                  <Head>
                        <title>All-in-One - Partner Kerja.id</title>
                  </Head>
                  <Navbar />
                  <main className='w-full lg:pt-[120px] pt-[90px] lg:pb-[0px] pb-[0px] min-h-screen overflow-hidden relative'>
                        {/* Ornament */}
                        <div className='absolute w-full h-full top-0 inset-x-0 z-[1] overflow-hidden pointer-events-none'>
                              <Image
                                    src="/assets/images/paper-clip.png"
                                    alt="Ornament"
                                    width={600} height={1000}
                                    className='w-full h-full object-cover'
                              />
                        </div>

                        <section className="container_section lg:mb-[22px] mb-[24px] relative z-[2]">
                              {/* History Link */}
                              <div className="w-full flex flex-wrap items-center gap-x-1 lg:mb-[22px] mb-[24px]">
                                    <Link href='/' className="bradcrumbs_text">
                                          Beranda
                                    </Link>
                                    <Icon.arrowDown className="w-5 h-5 text-slate-400 -rotate-90" />
                                    <Link href='/branding' className="bradcrumbs_text">
                                          Semua Kategori
                                    </Link>
                                    <Icon.arrowDown className="w-5 h-5 text-slate-400 -rotate-90" />
                                    <Link href='/branding' className="bradcrumbs_text">
                                          Desain Grafis & Branding
                                    </Link>
                                    <Icon.arrowDown className="w-5 h-5 text-slate-400 -rotate-90" />
                                    <Link href='/branding/aio' className="bradcrumbs_text_active">
                                          All-in-One
                                    </Link>
                              </div>
                        </section>

                        <section className="container_section_2 relative z-[2]">
                              {/* Images */}
                              <div data-aos='fade-up' className='w-full lg:h-[571px] h-[270px] overflow-hidden rounded-[16px] lg:mb-[50px] mb-6'>
                                    <Image
                                          src="/assets/images/brand-guidlines-detail.png"
                                          alt="Brand Guidlines"
                                          width={775} height={571}
                                          className="w-full h-full object-cover"
                                    />
                              </div>
                              {/* Name, Rating, Description */}
                              <div data-aos='fade-up' className="w-full flex flex-col items justify-center">
                                    <h2 className="font-quicksand font-bold lg:text-[32px] text-[24px] text-center lg:leading-[40px] leading-normal text-slate-800 mb-[14px]">
                                          Paket All-in-One
                                    </h2>
                                    <div className="w-max h-auto mx-auto flex items-center mb-6">
                                          <div className="flex items-center gap-x-2 border-r border-slate-400 pr-[14px]">
                                                <Icon.stars className="w-5 h-5 text-yellow-400" />
                                                <p className="font-medium lg:text-base text-sm text-slate-800 underline">4.9</p>
                                                <h2 className="font-normal lg:text-base text-sm text-slate-800">average rating</h2>
                                          </div>
                                          <div className='flex items-center gap-x-2 pl-[14px]'>
                                                <h2 className='font-medium lg:text-base text-sm underline text-slate-800'>124+</h2>
                                                <h2 className="font-normal lg:text-base text-sm text-slate-800">Penilaian</h2>

                                          </div>
                                    </div>
                                    <p className="font-normal lg:text-base text-sm text-center text-slate-400 mb-6">
                                          Produk layanan ini meliputi pembuatan logo, kartu nama, landingpage dll sesuai dengan kebutuhan
                                    </p>
                              </div>
                              {/* Tab Content in Box */}
                              <TabAio />
                              {/* Penilaian Produk */}
                              <Review />
                              {/* Produk Jasa Lainnya */}
                              <CategoryMore />
                              {/* Produk Jasa Lainnya */}
                              <CategoryMore />

                        </section>
                        <Footer />
                  </main>
            </>
      )
}
