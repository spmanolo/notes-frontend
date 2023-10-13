export default function Note({ note, toggleImportance }) {
  const { content, date, important } = note

  const label = important
    ? 'make not important'
    : 'make important'

  return (
    <li className='note'>
      <p>{content}</p>
      <small>{date} <br /> </small>
      <small>{important ? 'Importante' : 'No importante'}</small>
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}
