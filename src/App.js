import { useEffect, useState } from 'react'

import Note from './components/Note'
import CreateNoteForm from './components/CreateNoteForm'
import LoginForm from './components/LoginForm'
import Notification from './components/notification'

import noteService from './services/notes'
import loginService from './services/login'

export default function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [loading, setLoading] = useState(false)
  const [notMessage, setNotMessage] = useState(null)
  const [error, setError] = useState(false)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    setLoading(true)
    noteService.getAll().then(notes => {
      setNotes(notes)
      setLoading(false)
    })
  }, [])

  function toggleImportanceOf(id) {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService.update(changedNote)
      .then(newNote => {
        setNotes(notes.map(note => note.id !== id ? note : newNote))
      })
      .catch(error => {
        setError(true)
        setNotMessage(`Note '${note.content}' was already removed from server`)
        setTimeout(() => {
          setNotMessage(null)
          setError(false)
        }, 5000)
      })
    setNotes(notes.filter(n => n.id !== id))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const noteToAddToState = {
      content: newNote
    }

    noteService.create(noteToAddToState)
      .then(newNote => {
        setNotes(prevNotes => prevNotes.concat(newNote))
        setError(false)
        setNotMessage(`Note '${newNote.content}' has added to NOTES`)
        setTimeout(() => {
          setNotMessage(null)
        }, 5000)
      })

    setNewNote('') // refrescar el searchbar
  }

  async function handleLogin(event) {
    event.preventDefault()
    console.log('loggin in with', username, password)

    try {
      const user = await loginService.login({
        username, password
      })
      console.log(user)
      setUser(user)
      setUsername('')
      setPassword('')
      console.log('loggued in with', username, password)
    } catch (exception) {
      setError(true)
      setNotMessage('Wrong credentials')
      setTimeout(() => {
        setError(false)
        setNotMessage(null)
      }, 5000)
    }
  }

  return (
    <div>
      <h1>Notes</h1>

      <Notification error={error} message={notMessage} />

      {loading ? 'Cargando notas...' : ''}

      {user
        ? <CreateNoteForm newNote={newNote} onNewNoteChange={setNewNote} handleSubmit={handleSubmit} />
        : <LoginForm handleLogin={handleLogin} username={username} setUsername={setUsername} password={password} setPassword={setPassword} />}

      <ol>
        {notes
          .map((note) => {
            return <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
          })}
      </ol>
    </div>
  )
}
