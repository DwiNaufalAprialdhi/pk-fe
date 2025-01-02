import Icon from '@/components/Icon/Icon'
import React from 'react'

type ReviewProps = {
      className: string
}

export default function Review(props: ReviewProps) {
      return (
            <>
                  <div className={`flex items-center gap-x-[14px] text-slate-50 ${props.className}`}>
                        <div className='flex items-center gap-x-1'>
                              <Icon.stars className='w-4 h-4 text-[#FACC15]' />
                              <h2 className='font-normal text-base text-slate-50'>4.9<span className='font-medium text-slate-50'>/5.0</span></h2>
                        </div>
                        <h2 className='font-normal text-base'>101,000+ jasa terjual</h2>
                  </div>
            </>
      )
}
