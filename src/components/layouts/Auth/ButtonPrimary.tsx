import React from 'react'

type ButtonPrimaryProps = {
      onClick?: () => void
      children?: React.ReactNode
}

export default function ButtonPrimary(props: ButtonPrimaryProps) {
      return (
            <>
                  <button type='submit' onClick={props.onClick} className='w-full p-[15px] flex items-center justify-center bg-theme-primary_blue text-slate-50 font-normal lg:text-sm text-xs rounded-[8px] hover:bg-opacity-80 duration-300'>
                        {props.children}
                  </button>
            </>
      )
}
