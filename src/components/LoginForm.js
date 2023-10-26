import Togglable from './Togglable'

export default function LoginForm({ handleLogin, username, setUsername, password, setPassword }) {
  return (
    <Togglable buttonLabel='Show Login'>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type='text'
            value={username}
            name='Username'
            placeholder='Username'
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          <input
            type='password'
            value={password}
            name='Password'
            placeholder='Password'
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type='submit'>Login</button>
      </form>
    </Togglable>
  )
}
