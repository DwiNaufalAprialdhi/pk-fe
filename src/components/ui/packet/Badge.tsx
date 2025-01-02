import React from 'react'

type BadgeProps = {
      title: string
      children?: React.ReactNode
      className?: string
}

export default function Badge(props: BadgeProps) {
      return (
            <>
                  <div className={`w-max py-[10px] px-[15px] rounded-full bg-text-dark mb-[14px] flex items-center justify-center gap-2 ${props.className}`}>
                        <h2 className='font-bold lg:text-sm text-xs text-slate-50'>{props.title}</h2>
                        {props.children}
                  </div>
            </>
      )
}
