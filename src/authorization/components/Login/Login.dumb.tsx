import * as React from 'react'

const S = require('./Login.styles.scss')


const Login = ({ handleLogin }) => (
  <>
    <span>Login</span>
    <input className={S.input} />
    <span>Hasło</span>
    <input className={S.input} />
    <button onClick={handleLogin}>wyślij</button>
  </>
)


export default Login
