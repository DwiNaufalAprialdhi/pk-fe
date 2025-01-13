import Image from "next/image";
import Link from "next/link";
import React from "react";
import Icon from "../Icon/Icon";

export default function Footer() {
      return (
            <>
                  <main className="w-full hidden lg:block h-auto bg-transparent overflow-x-hidden py-[50px]">
                        <section className="container_section grid grid-cols-5">
                              <div data-aos="fade-up" className="col-span-1 flex flex-col">
                                    <Link href="#" className="block mb-6">
                                          <Image
                                                src="/assets/logo/logo-pk2.svg"
                                                alt="logo"
                                                width={100}
                                                height={100}
                                                className="w-[150px] h-auto object-cover"
                                          />
                                    </Link>
                                    <div className="flex items-center gap-6">
                                          <Link href="#" className="block">
                                                <Icon.instagram className="w-5 h-5 text-text-dark" />
                                          </Link>
                                          <Link href="#" className="block">
                                                <Icon.facebook className="w-5 h-5 text-text-dark" />
                                          </Link>
                                          <Link href="#" className="block">
                                                <Icon.tiktok className="w-5 h-5 text-text-dark" />
                                          </Link>
                                          <Link href="#" className="block">
                                                <Icon.threads className="w-5 h-5 text-text-dark" />
                                          </Link>
                                    </div>
                              </div>
                              <div data-aos="fade-up" className="col-span-1 flex flex-col gap-y-[14px]">
                                    <h2 className='font-medium text-base'>Kategori</h2>
                                    <Link href="#" className="block">
                                          <h2 className='font-normal text-sm'>Desain Grafis & Branding</h2>
                                    </Link>
                                    <Link href="#" className="block">
                                          <h2 className='font-normal text-sm'>App Development</h2>
                                    </Link>
                                    <Link href="#" className="block">
                                          <h2 className='font-normal text-sm'>UI/UX Desainer</h2>
                                    </Link>
                                    <Link href="#" className="block">
                                          <h2 className='font-normal text-sm'>Digital Marketing</h2>
                                    </Link>
                                    <Link href="#" className="block">
                                          <h2 className='font-normal text-sm'>Sales</h2>
                                    </Link>
                                    <Link href="#" className="block">
                                          <h2 className='font-normal text-sm'>3D Desainer</h2>
                                    </Link>
                              </div>
                              <div data-aos="fade-up" className="col-span-1 flex flex-col gap-y-[14px]">
                                    <h2 className='font-medium text-base'>Support</h2>
                                    <Link href="#" className="block">
                                          <h2 className='font-normal text-sm'>Customer Service</h2>
                                    </Link>
                                    <Link href="#" className="block">
                                          <h2 className='font-normal text-sm'>Community</h2>
                                    </Link>
                                    <Link href="#" className="block">
                                          <h2 className='font-normal text-sm'>FAQ</h2>
                                    </Link>
                              </div>
                              <div data-aos="fade-up" className="col-span-1 flex flex-col gap-y-[14px]">
                                    <h2 className='font-medium text-base'>Tentang Partnerkerja.id</h2>
                                    <Link href="#" className="block">
                                          <h2 className='font-normal text-sm'>Tentang Kami</h2>
                                    </Link>
                                    <Link href="#" className="block">
                                          <h2 className='font-normal text-sm'>Hak Cipta</h2>
                                    </Link>
                                    <Link href="#" className="block">
                                          <h2 className='font-normal text-sm'>Testimonials</h2>
                                    </Link>
                              </div>
                              <div data-aos="fade-up" className="col-span-1">
                              </div>
                              <div className="col-span-5 mt-[50px]">
                                    <h2 className='font-normal text-sm text-slate-400'>© Partnerkerja.id 2024, all rights reserved </h2>
                              </div>
                        </section>
                  </main>
            </>
      );
}
