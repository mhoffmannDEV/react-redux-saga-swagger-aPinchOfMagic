import * as React from 'react'


const Login = ({ handleLogin }) => (
  <>
    <span>Login</span>
    <input />
    <span>Hasło</span>
    <input />
    <button onClick={handleLogin}>wyślij</button>
  </>
)


export default Login
