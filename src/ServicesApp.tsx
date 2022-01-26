import AppRouter from './routes/AppRouter'
import { ServicesProvider } from './context/servicesContext/ServicesContext'
import { CategoriesProvider } from './context/categoryContext/CategoryContext'

const AppStateServices = ({ children }: { children: JSX.Element }) => {
  return <ServicesProvider>{children}</ServicesProvider>
}

const AppStateCategories = ({ children }: { children: JSX.Element }) => {
  return <CategoriesProvider>{children}</CategoriesProvider>
}

const ServicesApp = () => {
  return (
    <AppStateCategories>
      <AppStateServices>
        <AppRouter />
      </AppStateServices>
    </AppStateCategories>
  )
}

export default ServicesApp
