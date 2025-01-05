import React from 'react'

type InputProps = {
      type: string
      name: string
      id: string
      placeholder: string
      required: boolean
}

export default function Input(props: InputProps) {
      return (
            <>
                  <input type={props.type} name={props.name} id={props.id} className='w-full py-[15px] px-5 bg-white rounded-[8px] font-normal lg:text-sm text-xs text-text-dark placeholder:text-text-secondary outline-none' placeholder={props.placeholder} required={props.required} />
            </>
      )
}
