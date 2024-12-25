import React from 'react'
import { useState } from 'react'

function MyBtn() {
    let[counter,setcounter] = useState(0);

    function handleclick(){
        if(counter < 20){
            setcounter(counter+1);
        }
        else{
            setcounter(counter)
        }
        
    }
    function handledec(){
        if(counter > 0){
            setcounter(counter-1);
        }
        else{
            setcounter(counter)
        }
        
    }

  return (
    <>
    {counter}

   <button onClick={handleclick} className='bg-green-700 w-56 h-20 rounded xxl text-xl btn absolute top-1/2 right-3/4'> 
   increase 
   </button>
   <button className='bg-green-700 w-56 h-20 rounded xxl text-xl btn absolute top-1/2 right-1/4' onClick={handledec}>decrese</button>
   </>
  )
}

export default MyBtn