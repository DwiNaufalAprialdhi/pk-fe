import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type LinkProps = {
      link: string
      image: string
      category: string
      title: string
}

export default function CardInovation(props: LinkProps) {

      //function truncate
      const truncate = (str: string, n: number) => {
            return str.length > n ? str.substr(0, n - 1) + "..." : str;
      }

      return (
            <>
                  <Link href={props.link} className='col-span-1 block w-full h-auto rounded-[16px] overflow-hidden shadow-sm md:hover:-translate-y-1 duration-300 border border-slate-200/30 group'>
                        <div className='w-full lg:h-[200px] h-[110px] rounded-t-[16px]'>
                              <Image src={props.image} alt='discover' width={360} height={200} className='w-full h-full object-cover' />
                        </div>
                        <div className='w-full bg-white pt-6 pb-4 px-[10px] flex flex-col gap-y-[8px]'>
                              <h2 className='font-normal text-xs text-slate-400'>
                                    {truncate(props.category, 25)}
                              </h2>
                              <h2 className='font-medium text-sm'>
                                    {truncate(props.title, 45)}
                              </h2>
                        </div>
                  </Link>
            </>
      )
}
