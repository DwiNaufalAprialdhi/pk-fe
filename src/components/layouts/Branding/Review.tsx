import Icon from '@/components/Icon/Icon'
import React from 'react'
import ItemRiview from './ItemRiview'

export default function Review() {
      return (
            <>
                  <div className='w-full h-auto mb-[50px] lg:mb-[100px] flex flex-col'>
                        {/* Head Title */}
                        <h2 data-aos="fade-left" className="font-semibold lg:text-[24px] text-base text-slate-800 mb-6">Penilaian Produk</h2>
                        {/* Marker */}
                        <div data-aos="fade-left" className="w-full h-auto mx-auto flex items-start justify-start lg:mb-[50px] mb-6">
                              <div className="flex items-center gap-x-2 border-r border-slate-400 pr-[14px]">
                                    <div className="flex items-center gap-[2px]">
                                          <Icon.stars className="lg:w-4 lg:h-4 w-3 h-3 text-yellow-400" />
                                          <Icon.stars className="lg:w-4 lg:h-4 w-3 h-3 text-yellow-400" />
                                          <Icon.stars className="lg:w-4 lg:h-4 w-3 h-3 text-yellow-400" />
                                          <Icon.stars className="lg:w-4 lg:h-4 w-3 h-3 text-yellow-400" />
                                          <Icon.stars className="lg:w-4 lg:h-4 w-3 h-3 text-yellow-400" />
                                    </div>
                                    <p className="font-medium lg:text-base text-xs text-slate-800 underline">4.9</p>
                                    <h2 className="font-normal lg:text-base text-xs text-slate-800">average rating</h2>
                              </div>
                              <div className='flex items-center gap-x-2 pl-[14px]'>
                                    <h2 className='font-medium lg:text-base text-xs underline text-slate-800'>124+</h2>
                                    <h2 className="font-normal lg:text-base text-xs text-slate-800">Penilaian</h2>
                              </div>
                        </div>
                        {/* Review */}
                        <div className="flex flex-col gap-y-6">
                              <div data-aos="fade-left" className='flex items-center lg:gap-x-6 gap-x-4'>
                                    {/* Total Penilaian */}
                                    <h2 className="font-bold lg:text-base text-sm text-slate-800">
                                          124 Penilaian
                                    </h2>
                                    {/* Filter */}
                                    <div className="w-auto min-w-[98px] rounded-full border border-slate-200 overflow-hidden relative">
                                          <Icon.arrowDown className="w-3 h-auto text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
                                          <select name="select" id="select" className='appearance-none w-full h-auto outline-none bg-transparent py-[5px] pl-[15px] pr-[30px] font-normal lg:text-sm text-xs text-slate-800'>
                                                <option value="terbaru">Terbaru</option>
                                                <option value="terlama">Terlama</option>
                                          </select>
                                    </div>
                              </div>
                              <div data-aos="fade-left" className='flex flex-col gap-y-[50px]'>
                                    <ItemRiview
                                          avatar={'/assets/images/pay.jpg'}
                                          name={'Upay Murphy'}
                                          job={'CEO PT. Mencari Cinta Sejati'}
                                          rating={'4.9'}
                                          comment={'“Lorem ipsum dolor sit amet consectetur. Eget habitant eu mauris in ac. Scelerisque lectus pellentesque arcu bibendum in posuere quis quis enim.”'}
                                          date={'2023-08-19 11:32'}
                                    />
                                    <ItemRiview
                                          avatar={'/assets/images/pay.jpg'}
                                          name={'Upay Escobar'}
                                          job={'CEO Techcare'}
                                          rating={'4.9'}
                                          comment={'“Lorem ipsum dolor sit amet consectetur. Eget habitant eu mauris in ac. Scelerisque lectus pellentesque arcu bibendum in posuere quis quis enim.”'}
                                          date={'2023-08-19 11:32'}
                                    />
                                    <h2 className="block w-full text-center cursor-pointer font-medium lg:text-base text-sm text-theme-primary_blue">
                                          Lihat Semua Penilaian
                                    </h2>
                              </div>
                        </div>
                  </div>
            </>
      )
}
