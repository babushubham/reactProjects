import React from 'react'
import Login from './Component/login'
import Profile from './Component/profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  return (

    // yaha prr hrr wo element ko nest krna hota h jisko v dat aka jarurat hota h 
    <UserContextProvider>
       <Login/>
       <Profile />
    </UserContextProvider>
  )
}

export default App