import axios from 'axios'

export const getServicesAxios = async () => {
  const resp = await axios.get('https://busca2-backend.herokuapp.com/api/service')
  // const resp = await axios.get('http://localhost:4000/api/service')]
  return resp && resp.data.ok ? resp.data.services : []
}

export const getCategoriesAxios = async () => {
  const resp = await axios.get('https://busca2-backend.herokuapp.com/api/category/')
  // const resp = await axios.get('http://localhost:4000/api/category/')
  return resp && resp.data.ok ? resp.data.allCategories : []
}
