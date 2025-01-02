import Icon from '@/components/Icon/Icon'
import React from 'react'

type AccordionProps = {
      title: string;
      description: string;
}

export default function Accordion(props: AccordionProps) {
      return (
            <>
                  <div className='w-full h-auto border-b border-slate-200 overflow-hidden relative duration-500 transition-all transform ease-in-out'>
                        {/* Check */}
                        <input type="checkbox" className='absolute top-0 inset-x-0 w-full h-[70px] z-[1] cursor-pointer opacity-0 peer' />
                        {/* Icon */}
                        <div className='absolute peer-checked:opacity-0 duration-500 lg:top-5 top-7 right-0'>
                              <Icon.plusCircle className='lg:w-[32px] w-5 lg:h-[32px] h-5' />
                        </div>
                        <div className='absolute opacity-0 duration-500 peer-checked:opacity-100 lg:top-5 top-7 right-0'>
                              <Icon.minusCircle className='lg:w-[32px] w-5 lg:h-[32px] h-5' />
                        </div>
                        {/* Title */}
                        <div className='py-6 pr-10'>
                              <h2 className='font-semibold lg:text-[20px] text-base'>{props.title}</h2>
                        </div>
                        {/* Description */}
                        <div className='pb-0 h-0 overflow-hidden peer-checked:h-auto peer-checked:pb-5 duration-500 transition-all transform ease-in-out'>
                              <p className='font-normal lg:text-base text-xs text-slate-400'>{props.description}</p>
                        </div>
                  </div>
            </>
      )
}
