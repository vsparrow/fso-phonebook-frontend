import axios from 'axios'
// const baseurl = 'https://json-server--vsparrow.repl.co/persons'
const baseurl = '/api/persons';
// const baseurl = 'http://172.18.0.16:3001/api/persons'

const getAll = () => { 
  return axios.get(baseurl).then(response => response.data)
}  

const create = newObject => {
  return axios.post(baseurl, newObject).then(response=>response.data)
}

const remove = id => {
  const url = baseurl + `/${id}`
  // return url
  // console.log(url)
  return axios.delete(url).then(response=>response.data)
}

const update = (id,data) => {
  const url = baseurl + `/${id}`
  return axios.put(url, data).then(response=>response.data)
}

export default {
  getAll,
  create,
  remove,
  update
}