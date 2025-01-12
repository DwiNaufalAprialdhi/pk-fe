/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import Icon from '@/components/Icon/Icon';
import Button from '@/components/material/Button';
import ButtonBranding from '@/components/material/ButtonBranding';
import InputSearchBranding from '@/components/material/InputSearchBranding';
import InputSearchMobile from '@/components/material/InputSearchMobile';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
export default function Navbar() {

      // State Modal Telusuri Jasa ============================================================ //
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [isModalStyle, setIsModalStyle] = useState('');
      const elementRef = useRef<HTMLDivElement>(null);
      const modalRef = useRef<HTMLDivElement>(null);
      const [isAnimating, setIsAnimating] = useState(false);
      const handleIsModal = () => {
            if (isModalOpen) {
                  setIsModalStyle('toTop');
                  setIsAnimating(true);
                  setTimeout(() => {
                        setIsAnimating(false);
                        setIsModalOpen(false);
                  }, 300); // Durasi animasi
            } else {
                  setIsModalStyle('toBottom');
                  setIsModalOpen(true);
            }
      };
      // Cek apakah modal terbuka atau tidak
      useEffect(() => {
            const handleOutsideClick = (e: Event) => {
                  if (
                        elementRef.current &&
                        !elementRef.current.contains(e.target as Node) &&
                        modalRef.current &&
                        !modalRef.current.contains(e.target as Node)
                  ) {
                        if (isModalOpen) handleIsModal(); // Pastikan hanya memanggil jika modal terbuka
                  }
            };

            document.addEventListener('mousedown', handleOutsideClick);
            return () => {
                  document.removeEventListener('mousedown', handleOutsideClick);
            };
      }, [isModalOpen]); // Tambahkan `isModalOpen` untuk sinkronisasi kondisi
      // State Modal Telusuri Jasa ============================================================ //

      // State Search Active ================================================================== //
      const [isSearchActive, setIsSearchActive] = useState(false);
      const [isSearchStyle, setIsSearchStyle] = useState('');
      const handleIsSearchActive = () => {
            if (!isSearchActive) {
                  setIsSearchStyle('toBottom');
                  console.log('true');
                  setIsSearchActive(true);
            } else {
                  setIsSearchStyle('toTop');
                  console.log('false');
                  setTimeout(() => {
                        setIsSearchActive(false);
                  }, 300); // Durasi animasi
            }
      };
      // State Search Active ================================================================== //

      // State Search Active Mobile =========================================================== //
      const [isSearchMobile, setIsSearchMobile] = useState(false);
      const [isSearchMobileStyle, setIsSearchMobileStyle] = useState('');

      const handleSearchMobile = () => {
            if (!isSearchMobile) {
                  setIsSearchMobileStyle('toBottom');
                  setIsSearchMobile(true);
            } else {
                  setIsSearchMobileStyle('toTop');
                  setTimeout(() => {
                        setIsSearchMobile(false);
                  }, 300); // Durasi animasi
            }
      }
      // State Search Active Mobile =========================================================== //

      // State Overlay ======================================================================== //
      const [isOverlayVisible, setIsOverlayVisible] = useState(false);

      const toggleOverlay = () => {
            setIsOverlayVisible((prev) => !prev);
      };
      // State Overlay ======================================================================== //

      return (
            <>
                  <nav className='fixed top-0 inset-x-0 w-full lg:bg-white bg-theme-primary_blue z-40 transition-all duration-300 transform ease-in-out'>
                        {/* Navbar Desktop */}
                        <section className='hidden lg:block w-full h-auto py-[15px] px-5 md:px-0 lg:max-w-[1200px] md:max-w-[696px] max-w-none mx-auto'>
                              <div className='w-full flex items-center justify-between'>
                                    {/* ================== Kondisi Belum Login ==================  */}
                                    {/* Left */}
                                    <div className='w-full max-w-[50%] flex items-center gap-x-6'>
                                          <Link href='/branding' className='block w-max h-max'>
                                                <Image src='/assets/logo/logo-pk-primary.svg' alt='logo' width={150} height={25} className='min-w-[150px] h-auto object-cover' />
                                          </Link>
                                          <InputSearchBranding
                                                name={'search'}
                                                id={'search'}
                                                placeholder={'Cari Jasa...'}
                                          />
                                    </div>
                                    {/* Right */}
                                    <div className='w-full max-w-[50%] flex items-center justify-end'>
                                          <div className='flex items-center gap-x-[18px] pr-6 border-r border-slate-400 relative'>
                                                <div
                                                      className='flex items-center gap-x-2 cursor-pointer relative'
                                                      onClick={() => handleIsModal()}
                                                      ref={elementRef}
                                                >
                                                      <h2 className='font-normal text-sm leading-[16px] text-text-dark'>
                                                            Telusuri Jasa
                                                      </h2>
                                                      <Icon.arrowDown className={`${isModalOpen ? 'rotate-180' : ''} w-[16px] h-[16px] text-text-dark transition-all duration-300`} />
                                                      <div
                                                            ref={modalRef}
                                                            className={`absolute top-[50px] border border-slate-400/10 left-0 w-[410px] rounded-[8px] bg-white shadow-lg z-50 ${isModalStyle} ${isModalOpen || isAnimating ? 'block' : 'hidden'}`}
                                                      >
                                                            <ul className='p-[10px]'>
                                                                  <li className='p-2 hover:bg-slate-100 cursor-pointer rounded-[8px]'>
                                                                        <Link href={'#'} className='font-normal text-sm leading-[16px]'>
                                                                              Desain Grafis & Branding
                                                                        </Link>
                                                                  </li>
                                                                  <li className='p-2 hover:bg-slate-100 cursor-pointer rounded-[8px]'>
                                                                        <Link href={'#'} className='font-normal text-sm leading-[16px]'>
                                                                              Apps Development
                                                                        </Link>
                                                                  </li>
                                                                  <li className='p-2 hover:bg-slate-100 cursor-pointer rounded-[8px]'>
                                                                        <Link href={'#'} className='font-normal text-sm leading-[16px]'>
                                                                              Digital Marketing
                                                                        </Link>
                                                                  </li>
                                                                  <li className='p-2 hover:bg-slate-100 cursor-pointer rounded-[8px]'>
                                                                        <Link href={'#'} className='font-normal text-sm leading-[16px]'>
                                                                              Sales
                                                                        </Link>
                                                                  </li>
                                                            </ul>
                                                      </div>
                                                </div>
                                                <Link href='#' className='font-normal text-sm leading-[16px]'>
                                                      Tentang Kami
                                                </Link>
                                          </div>
                                          <div className='flex items-center'>
                                                <Link href='/auth/login' className='py-[10px] px-[20px] flex items-center justify-center text-center font-semibold text-sm hover:underline'>
                                                      Masuk
                                                </Link>
                                                <Link href={'/auth/registration'} className='w-max h-max'>
                                                      <ButtonBranding type={'button'} >
                                                            Daftar
                                                      </ButtonBranding>
                                                </Link>
                                          </div>
                                    </div>
                                    {/* ================== ################### ==================  */}

                                    {/* ================== Kondisi Sudah Login ==================  */}
                                    {/* Left */}
                                    {/* <div className='w-full max-w-[50%] flex items-center gap-x-6'>
                                          <Link href='/branding' className='block w-max h-max'>
                                                <Image src='/assets/logo/logo-pk-primary.svg' alt='logo' width={150} height={25} className='min-w-[150px] h-auto object-cover' />
                                          </Link>
                                          <div onClick={handleIsSearchActive} className='cursor-pointer'>
                                                {!isSearchActive ?
                                                      <>
                                                            < Icon.search className='w-4 h-4 text-text-dark' />
                                                      </>
                                                      :
                                                      <>
                                                            < Icon.close className='w-4 h-4 text-text-dark' />
                                                      </>
                                                }
                                          </div>
                                          <div className={`${isSearchActive ? 'block' : 'hidden'} ${isSearchStyle} w-full`}>
                                                <InputSearchBranding
                                                      name={'search'}
                                                      id={'search'}
                                                      placeholder={'Cari Jasa...'}
                                                />
                                          </div>
                                          <div className={`${isSearchActive ? 'hidden' : 'flex'}  items-center gap-x-[18px]`}>
                                                <Link href='#' className='font-normal text-sm leading-[16px]'>
                                                      Dashboard
                                                </Link>
                                                <Link href='#' className='font-normal text-sm leading-[16px]'>
                                                      Laporan Transaksi
                                                </Link>
                                                <div
                                                      className='flex items-center gap-x-2 cursor-pointer relative'
                                                      onClick={() => handleIsModal()}
                                                      ref={elementRef}
                                                >
                                                      <h2 className='font-normal text-sm leading-[16px]'>Telusuri Jasa</h2>
                                                      <Icon.arrowDown className={`${isModalOpen ? 'rotate-180' : ''} w-[16px] h-[16px] text-white transition-all duration-300`} />
                                                      <div
                                                            ref={modalRef}
                                                            className={`absolute top-[50px] border border-slate-400/10 left-0 w-[498px] rounded-[8px] bg-white shadow-lg z-50 ${isModalStyle} ${isModalOpen || isAnimating ? 'block' : 'hidden'}`}
                                                      >
                                                            <ul className='p-[10px]'>
                                                                  <li className='p-2 hover:bg-slate-100 cursor-pointer rounded-[8px]'>
                                                                        <Link href={'#'} className='font-normal text-sm leading-[16px]'>
                                                                              Desain Grafis & Branding
                                                                        </Link>
                                                                  </li>
                                                                  <li className='p-2 hover:bg-slate-100 cursor-pointer rounded-[8px]'>
                                                                        <Link href={'#'} className='font-normal text-sm leading-[16px]'>
                                                                              Apps Development
                                                                        </Link>
                                                                  </li>
                                                                  <li className='p-2 hover:bg-slate-100 cursor-pointer rounded-[8px]'>
                                                                        <Link href={'#'} className='font-normal text-sm leading-[16px]'>
                                                                              Digital Marketing
                                                                        </Link>
                                                                  </li>
                                                                  <li className='p-2 hover:bg-slate-100 cursor-pointer rounded-[8px]'>
                                                                        <Link href={'#'} className='font-normal text-sm leading-[16px]'>
                                                                              Sales
                                                                        </Link>
                                                                  </li>
                                                            </ul>
                                                      </div>
                                                </div>
                                          </div>
                                    </div> */}
                                    {/* Right */}
                                    {/* <div className='w-full max-w-[50%] flex items-center justify-end gap-x-[50px]'>
                                          <div className='flex items-center gap-x-[32px]'>
                                                <Link href='#'>
                                                      <Icon.notification className='w-6 h-6 text-text-dark' />
                                                </Link>
                                                <Link href='#'>
                                                      <Icon.mail className='w-6 h-6 text-text-dark' />
                                                </Link>
                                          </div>
                                          <div className='flex items-center gap-x-2'>
                                                <div className='flex flex-col items-end justify-end'>
                                                      <h2 className='font-normal text-xs'>Dwi Naufal Aprialdhi</h2>
                                                      <h2 className='font-normal text-xs'>Client</h2>
                                                </div>
                                                <div className='w-[48px] h-[48px] rounded-full overflow-hidden'>
                                                      <Image src='/assets/images/pay.jpg' alt='avatar' width={48} height={48} className='w-full h-full object-cover' />
                                                </div>
                                          </div>
                                    </div> */}
                                    {/* ================== ################### ==================  */}
                              </div>
                        </section>
                        {/* Navbar Tablet & Mobile */}
                        <section className={`w-full px-6 lg:hidden flex items-center ${isSearchMobile ? 'justify-start py-[13px]' : 'justify-between py-5'}`}>
                              {!isSearchMobile && <>
                                    <div onClick={toggleOverlay} className='cursor-pointer'>
                                          <Icon.hamburger className='w-5 h-5 text-white' />
                                    </div>
                                    <Link href='/branding' className='block w-auto h-auto'>
                                          <Image src='/assets/logo/logo-pk.svg' alt='logo' width={150} height={25} className='min-w-[150px] h-auto object-cover' />
                                    </Link>
                                    <div onClick={() => handleSearchMobile()} className='cursor-pointer'>
                                          <Icon.search className='w-5 h-5 text-white' />
                                    </div>
                              </>}
                              {/* Input Search */}
                              <div className={`${isSearchMobile ? 'block' : 'hidden'} ${isSearchMobileStyle} w-full relative`}>
                                    <InputSearchMobile
                                          name={'search'}
                                          id={'search'}
                                          placeholder={'Cari Jasa...'}
                                    />
                                    <div onClick={() => handleSearchMobile()} className='absolute top-1/2 right-4 transform -translate-y-1/2'>
                                          <Icon.close className='w-5 h-5 text-text-secondary' />
                                    </div>
                              </div>
                        </section>
                  </nav>

                  {/* Overlay */}
                  <div
                        className={`lg:hidden fixed top-0 inset-y-0 left-0 w-full h-full bg-theme-secondary_blue z-10 overflow-y-auto transition-transform duration-500 ${isOverlayVisible ? 'translate-x-0' : '-translate-x-full'
                              }`}
                  >
                        <div className='w-full flex flex-col px-5 py-[100px]'>
                              {/* ================== Kondisi Belum Login ==================  */}
                              {/* Login & Register */}
                              <div className='py-[14px] border-b border-theme-primary_blue flex items-center justify-between'>
                                    <div className='flex items-center gap-x-[14px]'>
                                          <div className='w-[42px] h-[42px] rounded-full overflow-hidden'>
                                                <Image src='/assets/images/profile.svg' alt='avatar' width={42} height={42} className='w-full h-full object-cover' />
                                          </div>
                                          <div className='flex flex-col gap-y-[2px]'>
                                                <h2 className='font-medium text-base text-slate-50'>Belum Punya Akun?</h2>
                                                <Link href='/auth/registration' className='font-normal text-sm text-slate-50 underline'>Daftar Sekarang</Link>
                                          </div>
                                    </div>
                                    <Link href='/auth/login' className='w-max h-max'>
                                          <Button type={'button'} >
                                                Login
                                          </Button>
                                    </Link>
                              </div>
                              {/* Telusuri Jasa */}
                              <div className='py-[14px] border-b border-theme-primary_blue flex flex-col relative'>
                                    <input type="checkbox" className='absolute top-0 inset-x-0 w-full h-[50px] peer opacity-0' />
                                    <Icon.arrowDown className='absolute top-[14px] right-5 w-5 h-5 text-white peer-checked:rotate-180 duration-300' />
                                    <h2 className='font-medium text-base text-slate-50'>Telusuri Jasa</h2>
                                    <ul className='w-full h-0 py-0 peer-checked:pt-[14px] peer-checked:h-auto overflow-hidden transition-all duration-300 ease-in-out flex flex-col gap-y-[14px]'>
                                          <li>
                                                <Link href='#' className='font-medium text-base text-slate-50'>
                                                      Desain Grafis & Branding
                                                </Link>
                                          </li>
                                          <li>
                                                <Link href='#' className='font-medium text-base text-slate-50'>
                                                      Apps Development
                                                </Link>
                                          </li>
                                          <li>
                                                <Link href='#' className='font-medium text-base text-slate-50'>
                                                      Digital Marketing
                                                </Link>
                                          </li>
                                          <li>
                                                <Link href='#' className='font-medium text-base text-slate-50'>
                                                      Sales
                                                </Link>
                                          </li>
                                    </ul>
                              </div>
                              {/* Tentang Kami */}
                              <Link href={'#'} className='py-[14px] border-b border-theme-primary_blue'>
                                    <h2 className='font-medium text-base text-slate-50'>Tentang Kami</h2>
                              </Link>
                              {/* ================== ################### ==================  */}

                              {/* ================== Kondisi Sudah Login ==================  */}
                              {/* Profile */}
                              {/* <div className='py-[14px] border-b border-theme-primary_blue flex items-center justify-between'>
                                    <div className='flex items-center gap-x-[14px]'>
                                          <div className='w-[42px] h-[42px] rounded-full overflow-hidden'>
                                                <Image src='/assets/images/profile.svg' alt='avatar' width={42} height={42} className='w-full h-full object-cover' />
                                          </div>
                                          <div className='flex flex-col gap-y-[2px]'>
                                                <h2 className='font-medium text-base text-slate-50'>Dwi Naufal Aprialdhi</h2>
                                                <h2 className='font-normal text-sm text-slate-50'>Client</h2>
                                          </div>
                                    </div>
                              </div> */}
                              {/* Dashboard */}
                              {/* <Link href={'#'} className='py-[14px] border-b border-theme-primary_blue'>
                                    <h2 className='font-medium text-base text-slate-50'>Dashboard</h2>
                              </Link> */}
                              {/* Laporan Transaksi */}
                              {/* <Link href={'#'} className='py-[14px] border-b border-theme-primary_blue'>
                                    <h2 className='font-medium text-base text-slate-50'>Laporan Transaksi</h2>
                              </Link> */}
                              {/* Telusuri Jasa */}
                              {/* <div className='py-[14px] border-b border-theme-primary_blue flex flex-col relative'>
                                    <input type="checkbox" className='absolute top-0 inset-x-0 w-full h-[50px] peer opacity-0' />
                                    <Icon.arrowDown className='absolute top-[14px] right-5 w-5 h-5 text-white peer-checked:rotate-180 duration-300' />
                                    <h2 className='font-medium text-base text-slate-50'>Telusuri Jasa</h2>
                                    <ul className='w-full h-0 py-0 peer-checked:pt-[14px] peer-checked:h-auto overflow-hidden transition-all duration-300 ease-in-out flex flex-col gap-y-[14px]'>
                                          <li>
                                                <Link href='#' className='font-medium text-base text-slate-50'>
                                                      Desain Grafis & Branding
                                                </Link>
                                          </li>
                                          <li>
                                                <Link href='#' className='font-medium text-base text-slate-50'>
                                                      Apps Development
                                                </Link>
                                          </li>
                                          <li>
                                                <Link href='#' className='font-medium text-base text-slate-50'>
                                                      Digital Marketing
                                                </Link>
                                          </li>
                                          <li>
                                                <Link href='#' className='font-medium text-base text-slate-50'>
                                                      Sales
                                                </Link>
                                          </li>
                                    </ul>
                              </div> */}
                              {/* Tentang Kami */}
                              {/* <Link href={'#'} className='py-[14px] border-b border-theme-primary_blue mb-[100px]'>
                                    <h2 className='font-medium text-base text-slate-50'>Tentang Kami</h2>
                              </Link> */}
                              {/* Footer Overlay */}
                              {/* <div className='flex flex-col gap-y-6'>
                                    <Link href={'#'} className='flex items-center gap-x-2 font-normal text-base text-slate-50'>
                                          <Icon.mail className='w-6 h-6 text-slate-50' />
                                          Pesan
                                    </Link>
                                    <Link href={'#'} className='flex items-center gap-x-2 font-normal text-base text-slate-50'>
                                          <Icon.notification className='w-6 h-6 text-slate-50' />
                                          Notifikasi
                                    </Link>
                                    <Link href={'#'} className='flex items-center gap-x-2 font-normal text-base text-slate-50'>
                                          <Icon.settings className='w-6 h-6 text-slate-50' />
                                          Pengaturan Akun
                                    </Link>
                                    <Link href={'#'} className='flex items-center gap-x-2 font-normal text-base text-slate-50'>
                                          <Icon.logout className='w-6 h-6 text-slate-50' />
                                          Keluar
                                    </Link>
                              </div> */}
                              {/* ================== ################### ==================  */}
                        </div>
                  </div>


            </>
      )
}
