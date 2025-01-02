import React from 'react'

type BadgeCategoryProps = {
      title: string
}

export default function BadgeCategory(props: BadgeCategoryProps) {
      return (
            <>
                  <div className='py-[5px] px-[10px] bg-theme-secondary_blue rounded-full flex items-center justify-center'>
                        <h2 className='font-normal text-xs text-slate-50'>{props.title}</h2>
                  </div>
            </>
      )
}
