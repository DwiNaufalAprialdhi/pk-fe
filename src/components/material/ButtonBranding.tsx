import React from 'react'

type ButtonProps = {
      type: 'button' | 'submit' | 'reset'
      children?: React.ReactNode
      className?: string
}

export default function ButtonBranding(props: ButtonProps) {
      return (
            <>
                  <button type={props.type} className={`w-full py-[10px] px-[20px] flex items-center justify-center text-center font-semibold lg:text-sm text-xs text-slate-50 bg-theme-primary_blue rounded-[8px] hover:bg-opacity-60 duration-500 cursor-pointer ${props.className}`} >
                        {props.children}
                  </button>
            </>
      )
}
