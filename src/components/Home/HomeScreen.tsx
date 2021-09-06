// import { ThemeContext } from '../../context/themeContext/ThemeContext'

import CTASection from '../ui/CTASection'
import Hero from '../ui/Hero'
import ProductList from '../ui/ProductList'
import PromoSection from '../ui/PromoSection'
import SectionCategory from '../ui/SectionCategory'
import Stats from '../ui/Stats'

const HomeScreen = () => {
  //   const { setDarkTheme, setLightTheme } = useContext(ThemeContext)

  return (
    <>
      <Hero />
      <SectionCategory />
      <CTASection />
      <ProductList />
      <Stats />
      <PromoSection />
    </>
  )
}

export default HomeScreen
