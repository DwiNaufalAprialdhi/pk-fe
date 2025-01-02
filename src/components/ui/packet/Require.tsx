import Icon from '@/components/Icon/Icon'
import React from 'react'

type RequireProps = {
      title: string
      className?: string
}

export default function Require(props: RequireProps) {
      return (
            <>
                  <div className={`flex items-center gap-x-[14px] group-hover:text-slate-50 duration-500 ${props.className}`}>
                        <Icon.check className='w-6 h-6 text-theme-primary_blue group-hover:text-slate-50 duration-500' />
                        <h2 className='font-normal lg:text-base text-sm'>{props.title}</h2>
                  </div>
            </>
      )
}
