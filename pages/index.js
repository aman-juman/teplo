import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from "@/layout/header/Header";
import SliderScreen from "@/components/pages/main/sliderScreen/SliderScreen";
import SliderBottomCardScreen from "@/components/pages/main/sliderBottomCardScreen/SliderBottomCardScreen";
import About from "@/components/pages/main/about/About";
import ServicesScreen from "@/components/pages/main/services/ServicesScreen";
import CallOrder from "@/components/pages/main/callOrder/CallOrder";

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
      </>
  )
}
