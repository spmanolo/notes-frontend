export default function CreateNoteForm({ newNote, onNewNoteChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Write a new note'
        onChange={({ target }) => onNewNoteChange(target.value)} value={newNote}
      />
      <button>Crear nota</button>
    </form>
  )
}
