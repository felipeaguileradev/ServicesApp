// import axios from 'axios'
import { createContext, useReducer } from 'react'
import { servicesReducer } from './servicesReducer'
import { getServicesAxios } from '../../helpers/getServices'

// Definir cómo luce, que información tendré aquí
export interface ServicesState {
  dataServices: Array<Services>
}

export interface IClient {
  id: string
  _id?: string
  name: string
  lastname: string
}

export interface Services {
  category: string
  categoryServicesTitle: string
  client: IClient
  description: string
  facebook: string
  horary: string
  id: string
  images: Array<ImagesServices>
  instagram: string
  modality: string
  price: string
  servicesName: string
  status: boolean
  wsp: string
  updatedAt: string
  createdAt: string
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
    const resp = await getServicesAxios()
    dispatch({ type: 'getServices', payload: resp })
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
