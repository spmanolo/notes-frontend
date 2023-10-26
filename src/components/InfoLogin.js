export default function InfoLogin({ username, handleLogout }) {
  return (
    <div>
      <p>{username} logged-in</p>
      <button onClick={handleLogout}>
        Cerrar Sesión
      </button>
    </div>
  )
}
