import axios from 'axios'
import { createContext, useReducer } from 'react'
import { servicesReducer } from './servicesReducer'

// Definir cómo luce, que información tendré aquí
export interface ServicesState {
  dataServices: Array<Services>
}

export interface Services {
  name: string
  id: string
  servicesName: string
  description: string
  horary: string
  images: Array<ImagesServices>
  email: string
  lastname: string
  address: string
  phone: string
  city: string
  number: string
  status: string
  category: string
  modality: string
  price: string
  wsp: string
  facebook: string
  instagram: string
}

interface ImagesServices {
  url: string
}

// estado inicial
export const servicesInitialState: ServicesState = {
  dataServices: []
}

// lo usaremos para decirle a React como luce y que expone el context
export interface ServicesContextProps {
  servicesState: ServicesState
  getServices: () => Promise<void>
}

// crear contexto
export const ServicesContext = createContext({} as ServicesContextProps)

//  componente proveedor del estado
export const ServicesProvider = ({ children }: { children: JSX.Element }) => {
  const [servicesState, dispatch] = useReducer(servicesReducer, servicesInitialState)

  const getServices = async () => {
    const resp = await axios.get('http://localhost:4000/api/client')
    if (resp.data.ok) {
      // console.log(resp.data.clients)
      dispatch({ type: 'getServices', payload: resp.data.clients })
    }
  }

  return (
    <ServicesContext.Provider
      value={{
        servicesState,
        getServices
      }}
    >
      {children}
    </ServicesContext.Provider>
  )
}
