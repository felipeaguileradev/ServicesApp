import { createContext, useReducer } from 'react'
import { categoriesReducer } from './categoryReducer'
import { getCategoriesAxios } from '../../helpers/getServices'

export interface Category {
  title: string
  id: string
}

export interface CategoriesState {
  dataCategories: Array<Category>
}

// estado inicial
export const categoriesInitialState: CategoriesState = {
  dataCategories: []
}

// lo usaremos para decirle a React como luce y que expone el context
export interface CategoriesContextProps {
  categoriesState: CategoriesState
  getCategories: () => Promise<void>
}

// crear contexto
export const CategoriesContext = createContext({} as CategoriesContextProps)

//  componente proveedor del estado
export const CategoriesProvider = ({ children }: { children: JSX.Element }) => {
  const [categoriesState, dispatch] = useReducer(categoriesReducer, categoriesInitialState)

  const getCategories = async () => {
    const resp = await getCategoriesAxios()
    dispatch({ type: 'getCategories', payload: resp })
  }

  return (
    <CategoriesContext.Provider value={{ categoriesState, getCategories }}>
      {children}
    </CategoriesContext.Provider>
  )
}
