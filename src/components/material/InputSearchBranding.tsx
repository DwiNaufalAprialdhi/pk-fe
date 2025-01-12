import React from 'react'
import Icon from '../Icon/Icon'

type InputSearchBrandingProps = {
      name: string
      id: string
      placeholder: string
      onChange?: () => void
}

export default function InputSearchBranding(props: InputSearchBrandingProps) {
      return (
            <>
                  <div className='w-full relative'>
                        <input type="text" name={props.name} id={props.id} onChange={props.onChange} className='w-full py-3 pl-[16px] pr-[40px] bg-slate-50 rounded-full font-normal text-sm leading-[16px] text-text-dark placeholder:text-text-secondary outline-none' placeholder='Cari Jasa...' />
                        {/* Icon Search */}
                        <Icon.search className='absolute top-1/2 right-4 transform -translate-y-1/2 w-4 h-4 text-slate-800' />
                  </div>
            </>
      )
}
