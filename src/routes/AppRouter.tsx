import { useContext, useEffect } from 'react'
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom'
// BrowserRouter as Router,
import ContactScreen from '../components/Contact/ContactScreen'
import Footer from '../components/ui/Footer'
import HomeScreen from '../components/Home/HomeScreen'
import Navbar from '../components/ui/Navbar'
import ServiceScreen from '../components/Services/ServiceScreen'
import ServicesScreen from '../components/Services/ServicesScreen'
import { ServicesContext } from '../context/servicesContext/ServicesContext'

const AppRouter = () => {
  const { getServices } = useContext(ServicesContext)

  useEffect(() => {
    getServices()
  }, [])

  return (
    <HashRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/services" component={ServicesScreen} />
          <Route exact path="/services/:id" component={ServiceScreen} />
          <Route exact path="/contact" component={ContactScreen} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default AppRouter
