import axios from 'axios'

const URL = 'http://localhost:3001/api/notes/'

let token = null

function setToken(newToken) {
  token = `bearer ${newToken}`
}

function getAll() {
  return axios.get(URL)
    .then(response => response.data)
}

function create(newNote) {
  const config = {
    headers: { Authorization: token }
  }

  return axios
    .post(URL, newNote, config)
    .then(response => response.data)
}

function update(changedNote) {
  const config = {
    headers: { Authorization: token }
  }

  return axios
    .put(URL + changedNote.id, changedNote, config)
    .then(response => response.data)
}

export default {
  getAll,
  create,
  update,
  setToken
}
