import {
  Header,
  Hero,
  HomeSectionFive,
  HomeSectionFour,
  HomeSectionOne,
  HomeSectionThree,
  HomeSectionTwo,
} from '@/components/organisms'

export default function Home() {
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
    </>
  )
}
