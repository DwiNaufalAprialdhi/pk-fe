import Icon from '@/components/Icon/Icon'
import Button from '@/components/material/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
      return (
            <>
                  <main className="w-full h-auto overflow-hidden lg:pt-[120px] pt-[90px] lg:mb-[130px] mb-[50px]">
                        <section className='container_section'>
                              {/* History Link */}
                              <div className="w-full flex items-center gap-x-1 lg:mb-[22px] mb-[24px]">
                                    <Link href='/' className="bradcrumbs_text">
                                          Beranda
                                    </Link>
                                    <Icon.arrowDown className="w-5 h-5 text-slate-400 -rotate-90" />
                                    <Link href='/branding' className="bradcrumbs_text">
                                          Semua Kategori
                                    </Link>
                                    <Icon.arrowDown className="w-5 h-5 text-slate-400 -rotate-90" />
                                    <Link href='/branding' className="bradcrumbs_text_active">
                                          Desain Grafis & Branding
                                    </Link>
                              </div>
                              {/* Hero */}
                              <div className="w-full grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-[80px] gap-[24px]">
                                    {/* Hero Left */}
                                    <div className="w-full col-span-1 flex flex-col order-2 lg:order-1">
                                          <h2 className="font-quicksand font-bold lg:text-[48px] text-[24px] lg:leading-[60px] leading-[30px] text-slate-800 mb-[14px] text-center lg:text-start">
                                                Desain Grafis & Branding yang Meningkatkan Identitas Bisnis Anda
                                          </h2>
                                          <p className='font-normal lg:text-[20px] text-sm text-slate-800 text-center lg:leading-6 leading-normal lg:text-start'>
                                                <span className='font-bold'>Desain yang Mengesankan:</span> Membantu merek Anda tampil menonjol dengan desain grafis yang unik dan profesional.
                                          </p>
                                          <div className="w-auto h-auto flex items-center gap-x-[14px] lg:my-[50px] my-[24px]">
                                                <Link href='#' className='lg:w-max w-full h-max'>
                                                      <Button type={'button'}>
                                                            Get Started
                                                      </Button>
                                                </Link>
                                                <Link href='#' className='lg:w-max w-full h-max'>
                                                      <button className="bg-transparent outline-none hover:underline transition_menu flex items-center py-[10px] px-[20px]  justify-center font-semibold lg:text-sm text-xs text-center text-slate-800">
                                                            Hubungi Kami
                                                      </button>
                                                </Link>
                                          </div>
                                          <div className='w-full flex flex-col gap-y-[14px]'>
                                                <h2 className='font-normal lg:text-sm text-xs text-slate-400 text-center lg:text-start'>
                                                      Software Terkini Digunakan Oleh Tim Kami
                                                </h2>
                                                <div className='w-full flex items-center lg:justify-normal md:justify-evenly justify-between lg:gap-x-6 gap-x-4'>
                                                      <Image src="/assets/images/ps.svg" alt="Logo" width={50} height={50} className='lg:w-[61px] w-[36px] h-auto object-cover rounded-[10px]' />
                                                      <Image src="/assets/images/ai.svg" alt="Logo" width={50} height={50} className='lg:w-[61px] w-[36px] h-auto object-cover rounded-[10px]' />
                                                      <Image src="/assets/images/id.svg" alt="Logo" width={50} height={50} className='lg:w-[61px] w-[36px] h-auto object-cover rounded-[10px]' />
                                                      <Image src="/assets/images/corel.svg" alt="Logo" width={50} height={50} className='lg:w-[61px] w-[36px] h-auto object-cover rounded-[10px]' />
                                                      <Image src="/assets/images/canva.svg" alt="Logo" width={50} height={50} className='lg:w-[61px] w-[36px] h-auto object-cover rounded-[10px]' />
                                                </div>
                                          </div>
                                    </div>
                                    {/* Hero Right */}
                                    <div className="w-full col-span-1 h-auto relative order-1 lg:order-2">
                                          {/* Button */}
                                          <Link href='/' className='absolute top-3 right-3 w-max bg-[#33415540]/20 flex items-center gap-x-2 lg:py-[11px] py-2 lg:px-[22px] px-4 rounded-full group z-[5]'>
                                                <h2 className='font-normal lg:text-xs text-[10px] text-slate-50'>Kembali ke website</h2>
                                                <Icon.arrowRight className='lg:w-[16px] lg:h-[16px] w-3 h-3 text-slate-50 group-hover:translate-x-1 duration-300' />
                                          </Link>
                                          {/* Text */}
                                          <div className='absolute lg:top-[80px] top-[55px] left-1/2 -translate-x-1/2 w-full h-auto lg:max-w-[288px] max-w-[150px] z-[5]'>
                                                <h2 className='font-normal lg:text-[24px] lg:leading-8 leading-normal text-sm text-center text-slate-50'>
                                                      Bantu Membangun Brand Bisnis Anda
                                                </h2>
                                          </div>
                                          {/* Image */}
                                          <Image src="/assets/images/product-1.svg" alt="Hero" width={567} height={571} className='hidden md:block w-full h-auto object-cover' />
                                          <Image src="/assets/images/product-1-sm.svg" alt="Hero" width={567} height={571} className='md:hidden w-full h-auto object-cover' />
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
