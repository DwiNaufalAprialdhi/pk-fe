import Icon from '@/components/Icon/Icon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type CardCategoryBrandingProps = {
      link: string;
      image: string;
      name: string;
      rating: string;
}
export default function CardCategoryBranding(props: CardCategoryBrandingProps) {
      return (
            <>
                  <Link href={props.link} className="w-full h-auto bg-white rounded-[16px] p-[10px] border border-slate-200 grid lg:grid-cols-2 grid-cols-1 items-start gap-[14px] group hover:bg-theme-primary_blue/5 transition_menu">
                        <div className='w-full col-span-1 h-[170px] rounded-[8px] overflow-hidden'>
                              <Image
                                    src={props.image}
                                    alt={props.name}
                                    width={170} height={170}
                                    className='w-full h-full object-cover'
                              />
                        </div>
                        <div className='w-full h-full col-span-1 flex flex-col items-start justify-between'>
                              <div className='flex flex-col items-start gap-y-[10px]'>
                                    <h2 className="font-bold lg:text-[22px] text-base lg:line-clamp-2 line-clamp-1">{props.name}</h2>
                                    <div className='flex items-center gap-x-2'>
                                          <div className='flex items-center gap-x-1'>
                                                <Icon.stars className='w-[14px] h-[14px] text-[#FACC15]' />
                                                <span className='font-semibold lg:text-base text-sm text-slate-800'>{props.rating}</span>
                                          </div>
                                          <h2 className="font-normal lg:text-base text-sm text-slate-800">average rating</h2>
                                    </div>
                              </div>
                              <div className='w-full flex items-center justify-between'>
                                    <div></div>
                                    <Icon.arrowRight className='lg:w-[32px] lg:h-[32px] w-5 h-5 text-slate-800 group-hover:-translate-x-2 transition_menu' />
                              </div>
                        </div>
                  </Link>
            </>
      )
}
