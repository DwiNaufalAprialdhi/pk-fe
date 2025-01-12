import Banner from '@/components/layouts/Banner'
import Category from '@/components/layouts/Branding/Category'
import Hero from '@/components/layouts/Branding/Hero'
import Navbar from '@/components/layouts/Branding/Navbar'
import Packet from '@/components/layouts/Branding/Packet'
import Faq from '@/components/layouts/Faq'
import Footer from '@/components/layouts/Footer'
import Head from 'next/head'
import React from 'react'

export default function index() {
      return (
            <>
                  <Head>
                        <title>Desain Grafis & Branding - Partner Kerja.id</title>
                  </Head>
                  <Navbar />
                  <Hero />
                  <Category />
                  <Packet />
                  <Faq />
                  <Banner />
                  <Footer />
            </>
      )
}
