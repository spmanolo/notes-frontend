export default function error({ error, message }) {
  if (message === null) {
    return null
  }

  return (
    <div className={error ? 'error' : 'msg-add'}>
      {message}
    </div>
  )
}
