import React from 'react'
import FooterSection from './Components/Pages/Home/FooterSection/FooterSection'
import HeaderSection from './Components/Pages/Home/HeaderSection/Navbar'
import HeroSection from './Components/Pages/Home/HeroSection/HeroSection'
import HotProducts from './Components/Pages/Home/HotProducts/HotProducts'

const App = () => {
  return (
    <div>
      <HeaderSection/>
      <HeroSection/>
       <HotProducts/>
      
      <FooterSection/>
      
    </div>
  )
}

export default App