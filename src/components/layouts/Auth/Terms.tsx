import Icon from '@/components/Icon/Icon'
import React from 'react'

type TermsProps = {
      value: string;
}

export default function Terms(props: TermsProps) {
      return (
            <>
                  <div className='flex items-center gap-x-2'>
                        <div className='lg:w-[30px] lg:h-[30px] w-4 h-4 overflow-hidden lg:rounded-[10px] rounded-[4px] relative'>
                              <input type="checkbox" name='terms' id='terms' value={props.value} className='absolute top-0 inset-x-0 w-full h-full opacity-0 z-10 cursor-pointer peer' />
                              <Icon.check className='w-full h-auto object-cover text-slate-400 hidden peer-checked:block' />
                              <div className='w-full h-full border border-slate-200 lg:rounded-[10px] rounded-[4px] block peer-checked:hidden'></div>
                        </div>
                        <label htmlFor="terms" className='font-normal lg:text-sm text-xs text-slate-400 cursor-pointer'>Saya setuju dengan <span className='font-semibold text-text-dark'>Syarat & Ketentuan</span></label>
                  </div>
            </>
      )
}
