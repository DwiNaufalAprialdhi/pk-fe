import Link from 'next/link'
import React, { useState } from 'react'
import Icon from '../Icon/Icon'
import Accordion from '../ui/faq/Accordion';

export default function Faq() {
      const [showToast, setShowToast] = useState(false);

      const handleCopy = () => {
            navigator.clipboard.writeText('support@partnerkerja.com');
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000); // Toast hilang setelah 3 detik
      };

      return (
            <>
                  <main className='w-full h-auto lg:mb-[325px] mb-[50px] overflow-hidden'>
                        <section className='container_section grid grid-cols-10 lg:gap-[50px] gap-[25px]'>
                              {/* Left */}
                              <div data-aos='fade-right' className='w-full lg:col-span-4 col-span-10 flex flex-col'>
                                    {/* Title & Description */}
                                    <h2 className='font-quicksand font-bold lg:text-[36px] text-[24px] mb-[14px] lg:text-start text-center'>Frequently Asked Questions</h2>
                                    <p className='font-normal lg:text-base text-sm text-slate-400 lg:mb-[50px] mb-[14px] lg:text-start text-center'>Pertanyaan yang sering ditanyakan</p>
                                    {/* Chat With Us */}
                                    <div className='flex flex-col lg:justify-start lg:items-start items-center justify-center lg:mb-[50px] mb-[14px]'>
                                          <h2 className='font-semibold lg:text-[24px] text-base mb-2'>Chat with us</h2>
                                          <p className='font-normal lg:text-base text-sm text-slate-400 mb-6'>Hubungi tim kami dengan</p>
                                          <Link href='#' className='flex items-center gap-x-2 mb-4'>
                                                <Icon.send className='w-6 h-6' />
                                                <h2 className='font-semibold lg:text-base text-sm underline'>Shoot us an email</h2>
                                          </Link>
                                          <Link href='#' className='flex items-center gap-x-2'>
                                                <Icon.instagram className='w-5 h-5' />
                                                <h2 className='font-semibold lg:text-base text-sm underline'>Message us on Instagram</h2>
                                          </Link>
                                    </div>
                                    {/* Call Us */}
                                    <div className='flex flex-col lg:justify-start lg:items-start items-center justify-center lg:mb-[50px] mb-[14px]'>
                                          <h2 className='font-semibold lg:text-[24px] text-base mb-2'>Call Us</h2>
                                          <p className='font-normal lg:text-base text-sm text-slate-400 mb-6'>Hubungi tim di Senin - Jumat 8am - 5pm.</p>
                                          <Link href='#' className='flex items-center gap-x-2 mb-4'>
                                                <Icon.phone2 className='w-6 h-6' />
                                                <h2 className='font-semibold lg:text-base text-sm underline'>+62 21 84596900</h2>
                                          </Link>
                                    </div>
                                    {/* Ask Anything? */}
                                    <div className='flex flex-col lg:justify-start lg:items-start items-center justify-center'>
                                          <h2 className='font-semibold lg:text-[24px] text-base mb-2'>Punya Pertanyaan Lain?</h2>
                                          <p className='font-normal lg:text-base text-sm text-slate-400 mb-6'>Hubungi kami via email:</p>
                                          {/* Form Email Clippboard */}
                                          <div className='lg:w-full w-max h-max relative'>
                                                <input type="text" className='lg:w-full w-max block pl-5 py-5 lg:pr-[109px] pr-[100px] bg-slate-50 rounded-[16px] font-semibold lg:text-[15px] text-xs outline-none' readOnly value={'support@partnerkerja.com'} />
                                                <div onClick={handleCopy}
                                                      className='absolute top-1/2 -translate-y-1/2 right-5 flex items-center gap-1 cursor-pointer'>
                                                      <h2 className='font-semibold text-xs text-text-secondary'>Copy</h2>
                                                      <Icon.Clipboard className='w-4 h-4 text-text-secondary' />
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              {/* Right */}
                              <div data-aos='fade-left' className='w-full h-max lg:col-span-6 col-span-10 bg-slate-50 rounded-[16px] overflow-hidden pt-[10px] pb-[24px] lg:px-[30px] px-5 flex flex-col gap-y-[14px]'>
                                    {/* Accordion */}
                                    {Array.from({ length: 5 }).map((_, index) => (
                                          <Accordion
                                                key={index}
                                                title={'Lorem ipsum dolor sit amet consectetur.'}
                                                description={'Lorem ipsum dolor sit amet consectetur. Ornare cursus nunc odio ipsum scelerisque nunc penatibus. Egestas venenatis pulvinar blandit sapien. Fames magna sollicitudin varius sit diam. Non accumsan volutpat purus eget dui tempor. Tempor quis vulputate dui habitant cum. In mi eu consequat lobortis dis fusce sem. At ut turpis faucibus volutpat egestas sed nisi. Consectetur gravida varius volutpat at ullamcorper laoreet ut vitae aenean. Amet sem ullamcorper turpis lectus diam donec mi tempor a.'}
                                          />
                                    ))}
                              </div>
                        </section>
                  </main>

                  {/* Toast Notification */}
                  <div className={`${showToast ? 'block' : 'hidden'} fixed bottom-5 right-5 bg-theme-primary_blue text-white px-4 py-2 rounded-lg shadow-lg lg:text-sm text-xs font-bold font-quicksand toLeft z-[99]`}>
                        Email berhasil disalin ke clipboard!
                  </div>
            </>
      )
}
