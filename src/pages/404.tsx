import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function notfound() {
      return (
            <>
                  <main className='w-full min-h-screen flex items-center justify-center'>
                        <div className='w-full lg:max-w-[1200px] md:max-w-[696px] max-w-none h-auto px-5 lg:px-0 grid lg:grid-cols-2 grid-cols-1 gap-6 lg:gap-0 items-center'>
                              {/* Left */}
                              <div className='w-full col-span-1 flex flex-col order-2 lg:order-1'>
                                    <h2 className='font-quicksand font-bold lg:text-[48px] text-[24px] lg:leading-[60px] leading-[30px] lg:text-start text-center mb-1 lg:mb-0'><span className='text-theme-primary_blue'>Maaf,</span> Halaman ini sedang tidak tersedia sekarang.</h2>
                                    <h2 className='font-normal lg:text-[24px] text-sm lg:mb-[50px] mb-6 lg:text-start text-center'>
                                          Halaman yang kamu lihat tidak bisa ditemukan.
                                    </h2>

                                    <h2 className='font-normal lg:text-[20px] text-xs text-slate-400 lg:text-start text-center'>
                                          Kembali ke <Link href={'/'} className='font-medium text-theme-primary_blue'>Halaman Utama</Link> atau <Link href={'/'} className='font-medium text-theme-primary_blue'>Hubungi Admin</Link>
                                    </h2>
                              </div>

                              {/* Right */}
                              <div className="w-full col-span-1 lg:h-[581px] md:h-[450px] h-[250px] overflow-hidden order-1 lg:order-2">
                                    <Image src='/assets/images/404.svg' alt='404' width={581} height={581} className='w-full h-full object-cover' />
                              </div>
                        </div>
                  </main>
            </>
      )
}
