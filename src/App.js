import React from 'react'
import FooterSection from './Components/Pages/Home/FooterSection/FooterSection'
import HeaderSection from './Components/Pages/Home/HeaderSection/Navbar'
import HeroSection from './Components/Pages/Home/HeroSection/HeroSection'
import HotProducts from './Components/Pages/Home/HotProducts/HotProducts'
import FlashSale from './Components/Pages/Home/FlashSaleSection/FlashSale'
import BestSelling from './Components/Pages/Home/BestSellingSection/BestSelling'
import ContentSection from './Components/Pages/Home/ContentSection/ContentSection'

const App = () => {
  return (
    <div>
      <HeaderSection/>
      <HeroSection/>
       <HotProducts/>
       <FlashSale/>
       <BestSelling/>
       <ContentSection/>
      
      <FooterSection/>
      
    </div>
  )
}

export default App