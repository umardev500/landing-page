'use client'

import { ScrollToTop } from '@/components/atoms'
import {
  Footer,
  Header,
  Hero,
  HomeSectionFive,
  HomeSectionFour,
  HomeSectionOne,
  HomeSectionThree,
  HomeSectionTwo,
} from '@/components/organisms'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <HomeSectionOne />
        <HomeSectionTwo />
        <HomeSectionThree />
        <HomeSectionFour />
        <HomeSectionFive />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
