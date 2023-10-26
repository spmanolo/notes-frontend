import { useState, useRef } from 'react'

import Togglable from './Togglable'

export default function NoteForm({ createNote }) {
  const [newNote, setNewNote] = useState('')

  const noteFormRef = useRef()

  function addNote(event) {
    event.preventDefault()

    const noteObject = {
      content: newNote
    }

    createNote(noteObject)
    setNewNote('')

    noteFormRef.current.toggleVisivility()
  }

  return (
    <Togglable buttonLabel='New Note' ref={noteFormRef}>
      <h3>Create a new note</h3>

      <form onSubmit={addNote}>
        <input
          type='text'
          placeholder='Write a new note'
          onChange={({ target }) => setNewNote(target.value)}
          value={newNote}
        />
        <button>Crear nota</button>
      </form>
    </Togglable>
  )
}
