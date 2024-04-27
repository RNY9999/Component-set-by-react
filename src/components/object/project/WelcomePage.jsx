import React from 'react'
import Register from './Register'

const WelcomePage = () => {
  return (
    <div>
      <h1>This is Welcome Page!</h1>
      <a href="/login">ログイン</a>
      <Register/>
    </div>
  )
}

export default WelcomePage
