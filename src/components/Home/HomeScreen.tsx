// import { ThemeContext } from '../../context/themeContext/ThemeContext'

import { useEffect } from 'react'
import CTASection from '../ui/CTASection'
import Hero from '../ui/Hero'
import ProductList from '../ui/ProductList'
import { ScrollTop } from '../../helpers/ScrollTop'
import SectionInformation from './SectionInformation'
// import SectionCategory from '../ui/SectionCategory'

const HomeScreen = () => {
  useEffect(() => {
    ScrollTop()
  }, [])
  return (
    <div className="bg-base-200">
      <Hero />
      {/* <SectionCategory /> */}
      <ProductList />
      <CTASection />
      <SectionInformation />
    </div>
  )
}

export default HomeScreen
