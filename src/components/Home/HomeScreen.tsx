// import { ThemeContext } from '../../context/themeContext/ThemeContext'

import CTASection from '../ui/CTASection'
import Footer from '../ui/Footer'
import Hero from '../ui/Hero'
import Navbar from '../ui/Navbar'
import ProductList from '../ui/ProductList'
import PromoSection from '../ui/PromoSection'
import SectionCategory from '../ui/SectionCategory'
import Stats from '../ui/Stats'

const HomeScreen = () => {
  //   const { setDarkTheme, setLightTheme } = useContext(ThemeContext)

  return (
    <>
      <Navbar />
      <Hero />
      <SectionCategory />
      <CTASection />
      <ProductList />
      <Stats />
      <PromoSection />
      <Footer />
    </>
  )
}

export default HomeScreen
