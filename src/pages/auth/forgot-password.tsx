import ButtonPrimary from '@/components/layouts/Auth/ButtonPrimary'
import Input from '@/components/layouts/Auth/Input'
import InputPassword from '@/components/layouts/Auth/InputPassword'
import LayoutsAuth from '@/components/layouts/Auth/LayoutsAuth'
import Link from 'next/link'
import React from 'react'


export default function forgotpassword() {
      return (
            <>
                  <LayoutsAuth>
                        <div className='flex flex-col'>

                              {/* Title */}
                              <h2 className='font-quicksand font-bold lg:text-[48px] text-[24px] lg:leading-[60px] leading-normal mb-2 text-center lg:text-start'>Reset Password</h2>
                              <h2 className='font-normal lg:text-sm text-xs text-slate-400 lg:mb-[50px] mb-[24px] text-center lg:text-start'>Tidak punya akun? <Link href={'/auth/registration'} className='font-medium underline text-text-dark'>Buat akun baru</Link></h2>

                              {/* Form */}
                              <form action="#" className='w-full flex flex-col lg:mb-6 mb-5'>
                                    <div className='w-full mb-[14px]'>
                                          <Input
                                                type={'text'}
                                                name={'username'}
                                                id={'username'}
                                                placeholder={'Masukkan Email atau Username'}
                                                required={true} />
                                    </div>
                                    <div className='w-full mb-[14px]'>
                                          <InputPassword
                                                name={'password'}
                                                id={'password'}
                                                placeholder={'Masukkan Password Lama'}
                                                required={true} />
                                    </div>
                                    <div className='w-full lg:mb-[50px] mb-[24px]'>
                                          <InputPassword
                                                name={'password'}
                                                id={'password'}
                                                placeholder={'Masukkan Password Baru'}
                                                required={true} />
                                    </div>
                                    <div className='w-full'>
                                          <ButtonPrimary>
                                                Ubah Password
                                          </ButtonPrimary>
                                    </div>
                              </form>
                        </div>
                  </LayoutsAuth>
            </>
      )
}
