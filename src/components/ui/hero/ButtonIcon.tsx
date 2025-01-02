import Link from 'next/link'
import React from 'react'

type Props = {
      link: string,
      title: string,
      children: React.ReactNode
      className?: string
}

export default function ButtonIcon(props: Props) {
      return (
            <>
                  <Link href={props.link} type='button' className={`w-full lg:p-[15px] p-3 flex items-center justify-center gap-2 bg-[#1E293B] rounded-[8px] hover:bg-opacity-80 duration-300 ${props.className}`}>
                        {props.children}
                        <h2 className='font-semibold lg:text-sm text-xs text-slate-50'>{props.title}</h2>
                  </Link>
            </>
      )
}
