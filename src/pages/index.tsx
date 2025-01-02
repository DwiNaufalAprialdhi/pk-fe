import Banner from '@/components/layouts/Banner'
import Blog from '@/components/layouts/Blog'
import Category from '@/components/layouts/Category'
import Faq from '@/components/layouts/Faq'
import Footer from '@/components/layouts/Footer'
import Hero from '@/components/layouts/Hero'
import Inovation from '@/components/layouts/Inovation'
import Navbar from '@/components/layouts/Navbar'
import Packet from '@/components/layouts/Packet'
import Testimonial from '@/components/layouts/Testimonial'
import WhyExplain from '@/components/layouts/WhyExplain'
import React from 'react'

export default function index() {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <WhyExplain />
      <Inovation />
      <Packet />
      <Blog />
      <Testimonial />
      <Faq />
      <Banner />
      <Footer />
    </>
  )
}
