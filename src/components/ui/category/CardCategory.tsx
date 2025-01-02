import React from 'react'

type CardCategoryProps = {
      children: React.ReactNode
      title: string
      description: string
}

export default function CardCategory(props: CardCategoryProps) {
      return (
            <>
                  <div className='w-full col-span-1 h-full lg:min-h-[220px] min-h-[150px] p-5 bg-card-secondary rounded-[12px] flex flex-col items-start justify-between lg:gap-[24px] gap-4 hover:bg-theme-primary_blue group transition-all duration-300 ease-in-out'>
                        {props.children}
                        <div className='flex flex-col gap-y-[14px]'>
                              <h2 className='font-quicksand font-bold lg:text-[24px] text-base lg:leading-[30px] leading-normal group-hover:text-slate-50 duration-300'>{props.title}</h2>
                              <p className='font-normal lg:text-base text-sm text-slate-400 group-hover:text-slate-50 duration-300'>{props.description}</p>
                        </div>
                  </div>
            </>
      )
}
