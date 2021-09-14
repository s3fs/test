/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

const url = 'http://localhost:3001/notes'

const getAll = async () => {
  return await axios.get(url)
}

const createNew = async (content) => {
  const obj = {
    content,
    important: false
  }

  const res = await axios.post(url, obj)
  return res.data 
}

export default { getAll, createNew }