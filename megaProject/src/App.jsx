import conf from './conf/conf';
import './App.css'
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import authService from './appwrite/auth';
import login  from './store/authSlice';


function App() {
 const [loading,setLoading] = useState(true);
const dispatch = useDispatch()


useEffect(()=>{
  authService.getCurrentUser()
  .then((userData)=>{
    if(userData){
      dispatch(login({userData}))
    } else{
      dispatch(logout())
    }
  })
  .finally(()=> setLoading(false))
}
,[])


  return !loading ? (<> <h1>hello</h1> </>) : null
}

export default App
