import Banner from '@/Component/Banner/Banner'
import FeatureSection from '@/Component/FeatureSection/FeatureSection'
import HomepageRegistration from '@/Component/HomapageRegister-section/HomepageRegistration'
import Navbar from '@/Component/Navbar/Navbar'
import PriceSection from '@/Component/Price/PriceSection'
import SecuritySection from '@/Component/SecuritySection/SecuritySection'
import Image from 'next/image'

export default function Home() {
  return (
 <div>
     <Navbar></Navbar>
    <Banner></Banner>
    <FeatureSection></FeatureSection>
    <PriceSection></PriceSection>
    <HomepageRegistration></HomepageRegistration>
    <SecuritySection></SecuritySection>
 </div>
  )
}
