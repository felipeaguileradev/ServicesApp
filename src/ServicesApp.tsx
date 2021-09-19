import AppRouter from './routes/AppRouter'
import { ServicesProvider } from './context/servicesContext/ServicesContext'

const AppState = ({ children }: { children: JSX.Element }) => {
  return <ServicesProvider>{children}</ServicesProvider>
}

const ServicesApp = () => {
  return (
    <AppState>
      <AppRouter />
    </AppState>
  )
}

export default ServicesApp
