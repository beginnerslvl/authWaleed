import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup'
import AuthDetail from './components/auth/AuthDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Signin/>
    <Signup/>
    <AuthDetail/>
    </>
  )
}

export default App
