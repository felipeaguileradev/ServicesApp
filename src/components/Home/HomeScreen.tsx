// import { ThemeContext } from '../../context/themeContext/ThemeContext'

import CTASection from '../ui/CTASection'
import Hero from '../ui/Hero'
import ProductList from '../ui/ProductList'
// import Stats from '../ui/Stats'
// import PromoSection from '../ui/PromoSection'
// import SectionCategory from '../ui/SectionCategory'

const HomeScreen = () => {
  //   const { setDarkTheme, setLightTheme } = useContext(ThemeContext)

  return (
    <>
      <Hero />
      {/* <SectionCategory /> */}
      <ProductList />
      <CTASection />
      {/* <Stats /> */}
      {/* <PromoSection /> */}
    </>
  )
}

export default HomeScreen
