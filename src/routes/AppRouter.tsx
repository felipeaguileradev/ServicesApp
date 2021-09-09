import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import HomeScreen from '../components/Home/HomeScreen'
import ServicesScreen from '../components/Services/ServicesScreen'
import Navbar from '../components/ui/Navbar'
import ServiceScreen from '../components/Services/ServiceScreen'
import ContactScreen from '../components/Contact/ContactScreen'
import Footer from '../components/ui/Footer'

const AppRouter = () => {
  return (
    <Router>
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
    </Router>
  )
}

export default AppRouter
