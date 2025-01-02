import Image from 'next/image';
import React from 'react'

type CardWhyExplainProps = {
      number: string;
      title: string;
      description: string;
      children?: React.ReactNode;
}

export default function CardWhyExplain(props: CardWhyExplainProps) {
      return (
            <>
                  <div className='w-full lg:min-h-[392px] min-h-[300px] relative rounded-[16px] overflow-hidden bg-theme-primary_blue group'>
                        {/* Effect */}
                        <div className='absolute top-0 inset-x-0 w-full h-full z-[1]'>
                              <Image src='/assets/images/effect-paper.png' alt='ornament' width={300} height={300} className='w-full h-full object-cover' />
                        </div>
                        {/* Ornament */}
                        {props.children}
                        {/* Number */}
                        <div className='absolute top-5 left-5 lg:w-[60px] w-[30px] lg:h-[60px] h-[30px] bg-white rounded-full flex items-center justify-center z-[3]'>
                              <h2 className='font-normal lg:text-base text-xs text-theme-primary_blue'>{props.number}</h2>
                        </div>
                        {/* Title */}
                        <div className='absolute left-0 bottom-0 w-full lg:max-w-[300px] max-w-none flex flex-col gap-y-[14px] p-5 z-[3]'>
                              <h2 className='font-quicksand font-bold lg:text-[24px] text-base lg:leading-[30px] leading-normal text-slate-50'>{props.title}</h2>
                              <p className='font-normal lg:text-base text-sm text-slate-200'>{props.description}</p>
                        </div>
                  </div>
            </>
      )
}
