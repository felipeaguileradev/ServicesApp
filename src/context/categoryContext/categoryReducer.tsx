import { Category, CategoriesState } from './CategoryContext'

type CategoriesAction = { type: 'getCategories'; payload: Array<Category> }

export const categoriesReducer = (
  state: CategoriesState,
  action: CategoriesAction
): CategoriesState => {
  switch (action.type) {
    case 'getCategories':
      return {
        ...state,
        dataCategories: action.payload
      }

    default:
      return state
  }
}
