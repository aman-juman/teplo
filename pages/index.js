import { Inter } from '@next/font/google'
import Header from "@/layout/header/Header";
import SliderScreen from "@/components/pages/main/sliderScreen/SliderScreen";
import SliderBottomCardScreen from "@/components/pages/main/sliderBottomCardScreen/SliderBottomCardScreen";
import About from "@/components/pages/main/about/About";
import ServicesScreen from "@/components/pages/main/services/ServicesScreen";
import CallOrder from "@/components/pages/main/callOrder/CallOrder";
import StepScreen from "@/components/pages/main/stepsScreen/StepScreen";
import Map from "@/components/map/Map";
import MapScreen from "@/components/map/Map";
import ContactScreen from "@/components/pages/main/contact/Contact";
import Footer from "@/layout/footer/Footer";
import Advantage from "@/components/pages/main/advantage/Advantage";
import ServiceBlock from "@/admin/services/ServiceBlock";




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
        <SliderScreen />
        <SliderBottomCardScreen />
        <About />
        <ServicesScreen />
        <CallOrder />
        <Advantage />
        <StepScreen />
      <ContactScreen />
        {/*<ServiceBlock />*/}
      <Footer />
    </>
  )
}
