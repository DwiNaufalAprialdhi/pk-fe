import React from 'react'

type InputSearchMobileProps = {
      name: string
      id: string
      placeholder: string
      onChange?: () => void
}

export default function InputSearchMobile(props: InputSearchMobileProps) {
      return (
            <>
                  <div className='w-full relative'>
                        <input type="text" name={props.name} id={props.id} onChange={props.onChange} className='w-full py-3 pl-[16px] pr-[40px] bg-white rounded-full font-normal text-sm leading-[16px] text-text-dark placeholder:text-text-secondary outline-none' placeholder='Cari Jasa...' />
                  </div>
            </>
      )
}
