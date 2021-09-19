import { ServicesState, Services } from './ServicesContext'

type ServicesAction = { type: 'getServices'; payload: Array<Services> }

export const servicesReducer = (state: ServicesState, action: ServicesAction): ServicesState => {
  switch (action.type) {
    case 'getServices':
      return {
        ...state,
        dataServices: action.payload
      }

    default:
      return state
  }
}
