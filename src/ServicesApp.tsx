import React from 'react'

// import HomeScreen from './components/Home/HomeScreen'
// import { ThemeProvider } from './context/themeContext/ThemeContext'
import AppRouter from './routes/AppRouter'

// const AppState = ({ children }: any) => {
//   return <ThemeProvider>{children} </ThemeProvider>
// }

const ServicesApp = () => {
  return (
    // <AppState>
    <AppRouter />
    // </AppState>
  )
}

export default ServicesApp
