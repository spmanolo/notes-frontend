import axios from 'axios'

const URL = 'http://localhost:3001/api/notes/'

function getAll() {
  return axios.get(URL)
    .then(response => response.data)
}

function create(newNote) {
  return axios
    .post(URL, newNote)
    .then(response => response.data)
}

function update(changedNote) {
  return axios
    .put(URL + changedNote.id, changedNote)
    .then(response => response.data)
}

export default {
  getAll,
  create,
  update
}
