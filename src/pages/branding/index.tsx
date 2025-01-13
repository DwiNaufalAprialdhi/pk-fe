import Banner from '@/components/layouts/Banner'
import Category from '@/components/layouts/Branding/Category'
import Hero from '@/components/layouts/Branding/Hero'
import Navbar from '@/components/layouts/Branding/Navbar'
import Packet from '@/components/layouts/Branding/Packet'
import Faq from '@/components/layouts/Faq'
import Footer from '@/components/layouts/Footer'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

export default function index() {
      return (
            <>
                  <Head>
                        <title>Desain Grafis & Branding - Partner Kerja.id</title>
                  </Head>
                  <Navbar />
                  <div className='w-full h-auto relative'>
                        {/* Ornament */}
                        <div className='absolute w-full h-full top-0 inset-x-0 z-[1] overflow-hidden pointer-events-none'>
                              <Image
                                    src="/assets/images/paper-clip.png"
                                    alt="Ornament"
                                    width={600} height={1000}
                                    className='w-full h-full object-cover'
                              />
                        </div>
                        <div className='w-full h-auto relative z-[2]'>
                              <Hero />
                              <Category />
                              <Packet />
                              <Faq />
                              <Banner />
                              <Footer />
                        </div>
                  </div>
            </>
      )
}
