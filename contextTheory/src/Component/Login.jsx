import React from 'react'
import UserContext from '../Context/userContext'
import { useContext, useState } from 'react'

function Login() {

    // username and password ko set and get krne ke liye ye use krte h
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    // data ko context mein bhejne ke liye iska use krte h (ye sintax h, useContex ek hook h jiska help lete h user context ko target krne ke liye jisme hum data bhejte h. )
    const{setuser} = useContext(UserContext)

    const handleClick = (e)=> {
        e.preventDefault()
        // ye new username and password ka data bhejne usercontext mein set krne ke liye use krte h ke liye 
        setuser({username, password})
    }

  return (
    <div>
        <h2>
            login
        </h2>

        <input type="text" placeholder='username' 
        onChange={(e)=> setusername(e.target.value)}/>
        <input type="password" placeholder='password'
        onChange={(e)=> setpassword(e.target.value)} />
        <button
        onClick={handleClick}
        >Submit</button>
    </div>
  )
}

export default Login