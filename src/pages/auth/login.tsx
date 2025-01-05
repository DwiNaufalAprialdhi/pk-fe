import Icon from '@/components/Icon/Icon'
import ButtonPrimary from '@/components/layouts/Auth/ButtonPrimary'
import Input from '@/components/layouts/Auth/Input'
import InputPassword from '@/components/layouts/Auth/InputPassword'
import LayoutsAuth from '@/components/layouts/Auth/LayoutsAuth'
import Link from 'next/link'
import React from 'react'


export default function login() {
      return (
            <>
                  <LayoutsAuth>
                        <div className='flex flex-col'>

                              {/* Title */}
                              <h2 className='font-quicksand font-bold lg:text-[48px] text-[24px] lg:leading-[60px] leading-normal mb-2 text-center lg:text-start'>Masuk ke PartnerKerja</h2>
                              <h2 className='font-normal lg:text-sm text-xs text-slate-400 mb-5 text-center lg:text-start'>Tidak punya akun? <Link href={'/auth/registration'} className='font-medium underline text-text-dark'>Buat akun baru</Link></h2>

                              {/* Card */}
                              <div className='w-full grid lg:grid-cols-2 grid-cols-1 gap-5 lg:mb-[50px] mb-[25px]'>
                                    {/* Freelancer */}
                                    <div className='w-full col-span-1 relative'>
                                          <input type="radio" name="cardSelection" id="freelancer" value={"freelancer"} className='absolute top-0 inset-x-0 w-full h-full opacity-0 z-10 cursor-pointer peer' />
                                          <div className='w-full peer-checked:border-theme-primary_blue peer-checked:bg-theme-primary_blue/20 border border-slate-200 rounded-[16px] overflow-hidden lg:p-4 p-2 flex items-center lg:gap-x-4 gap-x-2 cursor-pointer hover:border-theme-secondary_blue hover:bg-theme-secondary_blue/10 duration-300'>
                                                <Icon.freelancer className='w-full lg:max-w-[70px] max-w-[50px] h-auto object-cover text-theme-secondary_blue' />
                                                <div className='flex flex-col'>
                                                      <h2 className='font-medium lg:text-[20px] text-sm mb-2'>Freelancer</h2>
                                                      <p className='font-normal lg:text-sm text-xs text-slate-400'>Mulai kesempatanmu untuk menambah penghasilan bersama dengan Partner Kerja.</p>
                                                </div>
                                          </div>
                                    </div>
                                    {/* Client */}
                                    <div className='w-full col-span-1 relative'>
                                          <input type="radio" name="cardSelection" id="client" value={"client"} className='absolute top-0 inset-x-0 w-full h-full opacity-0 z-10 cursor-pointer peer' />
                                          <div className='w-full peer-checked:border-theme-primary_blue peer-checked:bg-theme-primary_blue/20 border border-slate-200 rounded-[16px] overflow-hidden lg:p-4 p-2 flex items-center lg:gap-x-4 gap-x-2 cursor-pointer hover:border-theme-secondary_blue hover:bg-theme-secondary_blue/10 duration-300'>
                                                <Icon.client className='w-full lg:max-w-[70px] max-w-[50px] h-auto object-cover text-theme-secondary_blue' />
                                                <div className='flex flex-col'>
                                                      <h2 className='font-medium lg:text-[20px] text-sm mb-2'>Klien</h2>
                                                      <p className='font-normal lg:text-sm text-xs text-slate-400'>Cari jasa dengan berbagai macam produk untuk membantu bisnis dan usahamu.</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>

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
                                                placeholder={'Masukkan password'}
                                                required={true} />
                                    </div>
                                    <div className='w-full flex items-center justify-start lg:mb-[50px] mb-[25px]'>
                                          <h2 className='font-normal lg:text-sm text-xs text-slate-400 text-center lg:text-start'>Lupa password akun? <Link href={'/auth/forgot-password'} className='font-medium underline text-text-dark'>Reset Password</Link></h2>
                                    </div>
                                    <div className='w-full'>
                                          <ButtonPrimary>
                                                Masuk
                                          </ButtonPrimary>
                                    </div>
                              </form>

                              {/* Or */}
                              <div className='w-full flex items-center justify-between lg:mb-6 mb-5'>
                                    <div className='w-full h-[1px] bg-slate-400'></div>
                                    <h2 className='block w-full font-normal lg:text-sm text-[10px] text-center text-slate-400' >Atau masuk dengan</h2>
                                    <div className='w-full h-[1px] bg-slate-400'></div>
                              </div>

                              {/* Button Menu */}
                              <div className='w-full grid lg:grid-cols-2 grid-cols-1 gap-[14px]'>
                                    <Link href={'#'} className='w-full col-span-1 rounded-[8px] border border-slate-400 lg:p-3 p-2 flex items-center justify-center gap-2 hover:bg-slate-400/10 duration-300'>
                                          <Icon.google className='lg:w-6 lg:h-6 w-4 h-4 object-cover' />
                                          <h2 className='font-normal lg:text-sm text-xs'>
                                                Google
                                          </h2>
                                    </Link>
                                    <Link href={'#'} className='w-full col-span-1 rounded-[8px] border border-slate-400 lg:p-3 p-2 flex items-center justify-center gap-2 hover:bg-slate-400/10 duration-300'>
                                          <Icon.handphone className='lg:w-6 lg:h-6 w-4 h-4 object-cover' />
                                          <h2 className='font-normal lg:text-sm text-xs'>
                                                No. Handphone
                                          </h2>
                                    </Link>
                              </div>
                        </div>
                  </LayoutsAuth>
            </>
      )
}
