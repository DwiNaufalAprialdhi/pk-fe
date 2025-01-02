import Icon from '@/components/Icon/Icon'
import Image from 'next/image'
import React from 'react'

type CardTestimonialProps = {
      desc: string,
      name: string,
      job: string,
      img: string
}

export default function CardTestimonial(props: CardTestimonialProps) {
      return (
            <>
                  <div className='w-full h-auto lg:py-[30px] py-5 px-5 bg-slate-50 rounded-[16px] flex flex-col lg:hover:-translate-y-1 duration-300 ease-in-out'>
                        <div className='flex items-center gap-x-1 lg:mb-[72px] mb-[30px]'>
                              <Icon.stars className='w-4 h-auto text-[#FACC15]' />
                              <Icon.stars className='w-4 h-auto text-[#FACC15]' />
                              <Icon.stars className='w-4 h-auto text-[#FACC15]' />
                              <Icon.stars className='w-4 h-auto text-[#FACC15]' />
                              <Icon.stars className='w-4 h-auto text-[#FACC15]' />
                        </div>

                        <p className='font-quicksand font-bold lg:text-base text-sm mb-6'>{props.desc}</p>

                        <div className='flex items-center lg:gap-x-6 gap-x-3'>
                              <div className='w-12 h-12 overflow-hidden rounded-full'>
                                    <Image src={props.img} alt='Testimonial' width={48} height={48} className='w-full h-full object-cover' />
                              </div>
                              <div className='flex flex-col'>
                                    <h2 className='font-semibold lg:text-base text-xs'>{props.name}</h2>
                                    <p className='font-normal lg:text-base text-xs text-text-secondary'>{props.job}</p>
                              </div>
                        </div>
                  </div>
            </>
      )
}
