import conf from './conf/conf';
import './App.css'
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import authService from './appwrite/auth';
import login  from './store/authSlice';
import logout from './store/authSlice';
import Header from './components/Header'


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


  return !loading ? (<> 
    <Header/>
    <h1>hello guyzz</h1>
     </>
    ) 
    : null
}

export default App
