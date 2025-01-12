import Link from 'next/link'
import React from 'react'

export default function TabBranding() {
      return (
            <>
                  <div data-aos="fade-up" className='w-full py-[30px] px-5 border border-slate-200 rounded-[16px] mb-[50px] lg:mb-[100px]'>
                        {/* Tab */}
                        <div className="w-max h-max mx-auto flex items-center rounded-[8px] overflow-hidden border border-slate-200 mb-6">
                              {/* Started */}
                              <div className="w-max h-max relative">
                                    <input type="radio" name='selected' className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-[5] peer" defaultChecked />
                                    <div className='w-max h-max lg:py-[15px] py-2 lg:px-[30px] px-3 flex items-center justify-center font-medium lg:text-sm text-xs text-center text-slate-500 bg-slate-100 peer-checked:bg-white transition_menu peer-checked:text-slate-800'>
                                          Started
                                    </div>
                              </div>
                              {/* Standar */}
                              <div className="w-max h-max relative">
                                    <input type="radio" name='selected' className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-[5] peer" />
                                    <div className='w-max h-max lg:py-[15px] py-2 lg:px-[30px] px-3 flex items-center justify-center font-medium lg:text-sm text-xs text-center text-slate-500 bg-slate-100 peer-checked:bg-white transition_menu peer-checked:text-slate-800'>
                                          Standar
                                    </div>
                              </div>
                              {/* Professional */}
                              <div className="w-max h-max relative">
                                    <input type="radio" name='selected' className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-[5] peer" />
                                    <div className='w-max h-max lg:py-[15px] py-2 lg:px-[30px] px-3 flex items-center justify-center font-medium lg:text-sm text-xs text-center text-slate-500 bg-slate-100 peer-checked:bg-white transition_menu peer-checked:text-slate-800'>
                                          Professional
                                    </div>
                              </div>
                        </div>
                        <p className="font-normal lg:text-base text-sm text-center text-slate-400 mb-6">
                              Bayar Suka-suka sesuai Budjet Anda
                        </p>
                        <div className="flex items-start justify-between mb-6">
                              <div className='flex flex-col gap-y-1'>
                                    <h2 className="font-normal lg:text-base text-sm text-slate-800">Started</h2>
                                    <h1 className='font-bold lg:text-base text-sm'>Rp 10.000</h1>
                              </div>
                              <Link href='#' className="font-normal lg:text-xs text-[10px] text-slate-400 hover:underline">
                                    Lihat Detail Paket
                              </Link>
                        </div>
                        <div className='w-full flex flex-col gap-y-[14px] mb-6'>
                              <Link href="#">
                                    <button type='button' className='w-full p-[15px] flex items-center justify-center bg-theme-primary_blue text-slate-50 font-semibold lg:text-base text-xs rounded-[8px] hover:bg-opacity-80 duration-300'>
                                          Pilih Paket Started
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
