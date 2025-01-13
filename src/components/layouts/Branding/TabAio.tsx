import Require from '@/components/ui/packet/Require'
import Link from 'next/link'
import React from 'react'

export default function TabAio() {
      return (
            <>
                  <div data-aos="fade-up" className='w-full py-[30px] px-5 border border-slate-200 rounded-[16px] mb-[50px] lg:mb-[100px]'>
                        <div className="flex items-start justify-between mb-6">
                              <div className='flex flex-col gap-y-1'>
                                    <h2 className="font-normal lg:text-base text-sm text-slate-800">All-in-One</h2>
                                    <h1 className='font-bold lg:text-base text-sm'>Rp 100.000</h1>
                              </div>
                              <Link href='#' className="font-normal lg:text-xs text-[10px] text-slate-400 hover:underline">
                                    Lihat Detail Paket
                              </Link>
                        </div>
                        <div className='w-full flex flex-col gap-y-[14px] mb-6'>
                              <Link href="#">
                                    <button type='button' className='w-full p-[15px] flex items-center justify-center bg-theme-primary_blue text-slate-50 font-semibold lg:text-base text-xs rounded-[8px] hover:bg-opacity-80 duration-300'>
                                          Pilih Paket All-in-One
                                    </button>
                              </Link>
                              <Link href="#">
                                    <button type='button' className='w-full p-[15px] flex items-center justify-center bg-transparent text-text-dark font-semibold lg:text-base text-xs rounded-[8px] hover:underline duration-300'>
                                          Tanya Admin
                                    </button>
                              </Link>
                        </div>
                        {/* Deskripsi Produk */}
                        <div className="flex flex-col gap-y-2 mb-6">
                              <h2 className="font-medium lg:text-base text-sm text-slate-800">Deskripsi Produk</h2>
                              <p className="font-normal lg:text-base text-sm">
                                    Lorem ipsum dolor sit amet consectetur. Iaculis eleifend tortor et lacus in diam. Ultrices ipsum pulvinar posuere in quis lobortis faucibus. Pulvinar viverra laoreet tellus nunc pellentesque ultrices volutpat. Neque justo tellus mattis rhoncus potenti odio ipsum.
                              </p>
                        </div>
                        <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-[14px] mb-6">
                              <div className='w-full col-span-1 flex flex-col gap-y-[14px]'>
                                    <Require title='Desain Logo' />
                                    <Require title='Brand Guidelines' />
                                    <Require title='Media Sosial' />
                              </div>
                              <div className='w-full col-span-1 flex flex-col gap-y-[14px]'>
                                    <Require title='Landingpage' />
                                    <Require title='Digital Ads' />
                              </div>
                        </div>
                        {/* Durasi Pengerjaan */}
                        <div className="flex items-center justify-between mb-6">
                              <h2 className="font-medium lg:text-base text-sm text-slate-800">Deskripsi Produk</h2>
                              <p className="font-normal lg:text-sm text-xs text-slate-400">
                                    7 Hari
                              </p>
                        </div>
                        {/* Jumlah Revisi */}
                        <div className="flex items-center justify-between">
                              <h2 className="font-medium lg:text-base text-sm text-slate-800">Jumlah Revisi</h2>
                              <p className="font-normal lg:text-sm text-xs text-slate-400">
                                    1 Kali
                              </p>
                        </div>
                  </div>
            </>
      )
}
