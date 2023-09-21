import Banner from '@/Component/Banner/Banner'
import FeatureSection from '@/Component/FeatureSection/FeatureSection'
import HomepageRegistration from '@/Component/HomapageRegister-section/HomepageRegistration'
import SecondFeature from '@/Component/SecondFeature/SecondFeature'
import Navbar from '@/Component/Navbar/Navbar'
import PriceSection from '@/Component/Price/PriceSection'
import SecuritySection from '@/Component/SecuritySection/SecuritySection'
import Image from 'next/image'
import StopWastingTIme from '@/Component/Stop-Wasting-time/StopWastingTIme'
import Footer from '@/Component/Footer/Footer'

export default function Home() {
  return (
 <div>
     <Navbar></Navbar>
    <Banner></Banner>
    <FeatureSection></FeatureSection>
    <PriceSection></PriceSection>
    <HomepageRegistration></HomepageRegistration>
    <SecuritySection></SecuritySection>
    <SecondFeature></SecondFeature>
    <StopWastingTIme></StopWastingTIme>
    <Footer></Footer>
 </div>
  )
}
