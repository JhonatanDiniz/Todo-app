import axios from 'axios'


export const api = axios.create({
  baseURL: 'http://localhost:8080',
})

api.interceptors.request.use(async (config) => {
  const acessToken = sessionStorage.getItem('Token')
  console.log('Token no interceptador: ', acessToken)
  if(acessToken){
    config.headers.Authorization = `Bearer ${acessToken}`
  }
  return config
})