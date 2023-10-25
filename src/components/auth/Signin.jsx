import React from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { useState } from 'react'
import {auth} from '../../firebase'


const Signin = () => {
    const [email,setEm] = useState("")
    const [pass,setPass]  = useState("")

    const onSignin = (e) => {
        e.preventDefault
        signInWithEmailAndPassword(auth,email,pass)
        .then((useCredenials)=>{
            console.log(useCredenials)
        }).catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div className='sign-in-container'>
        <form onSubmit={onSignin}>
            <h1>Login</h1>
            <input
            type='email'
            placeholder='enter email'
            value={email}
            onChange={(e)=> setEm(e.target.value)}
            />
              <input
            type='password'
            placeholder='enter password'
            value={pass}
            onChange={(e)=> setPass(e.target.value)}
            />
            <button>Login</button>
        </form>
    </div>
  )
}

export default Signin