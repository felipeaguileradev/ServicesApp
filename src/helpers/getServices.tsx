import axios from 'axios'

export const getServicesAxios = async () => {
  const resp = await axios.get('https://busca2-backend.herokuapp.com/api/client')
  return resp && resp.data.ok ? resp.data.clients : []
}