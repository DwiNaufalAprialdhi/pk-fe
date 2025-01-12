import Icon from '@/components/Icon/Icon'
import Image from 'next/image'
import React from 'react'

type ItemRiviewProps = {
      avatar: string;
      name: string;
      job: string;
      rating: string;
      comment: string;
      date: string;
}

export default function ItemRiview(props: ItemRiviewProps) {
      return (
            <>
                  <div className="w-full flex flex-col">
                        <div className="w-full flex lg:flex-row flex-col items-center lg:justify-between justify-normal mb-6">
                              {/* Foto, Nama & Job User */}
                              <div className='w-full lg:w-auto flex items-center lg:gap-x-6 gap-x-2'>
                                    <div className='lg:w-[48px] lg:h-[48px] w-8 h-8 rounded-full overflow-hidden'>
                                          <Image
                                                src={props.avatar}
                                                alt="User"
                                                width={48} height={48}
                                                className='w-full h-full object-cover'
                                          />
                                    </div>
                                    <div className='flex flex-col'>
                                          <h2 className="font-semibold lg:text-base text-sm lg:mb-2 mb-1">{props.name}</h2>
                                          <h3 className="font-normal lg:text-base text-sm text-slate-400">{props.job}</h3>
                                    </div>
                              </div>
                              {/* Penilaian Rating */}
                              <div className=" w-full lg:w-auto h-auto flex items-end justify-end">
                                    <div className="flex items-center gap-x-2">
                                          <div className="flex items-center gap-[2px]">
                                                <Icon.stars className="lg:w-4 lg:h-4 w-3 h-3 text-yellow-400" />
                                                <Icon.stars className="lg:w-4 lg:h-4 w-3 h-3 text-yellow-400" />
                                                <Icon.stars className="lg:w-4 lg:h-4 w-3 h-3 text-yellow-400" />
                                                <Icon.stars className="lg:w-4 lg:h-4 w-3 h-3 text-yellow-400" />
                                                <Icon.stars className="lg:w-4 lg:h-4 w-3 h-3 text-yellow-400" />
                                          </div>
                                          <p className="font-medium lg:text-base text-xs text-slate-800 underline">{props.rating}</p>
                                          <h2 className="font-normal lg:text-base text-xs text-slate-800">Penilaian</h2>
                                    </div>
                              </div>
                        </div>
                        <p className="block font-medium lg:text-base text-sm lg:mb-6 mb-4">
                              {props.comment}
                        </p>
                        <div className='w-full flex items-center justify-between'>
                              <div></div>
                              <h2 className="block font-normal lg:text-sm text-xs text-slate-400">{props.date}</h2>
                        </div>
                  </div>
            </>
      )
}
