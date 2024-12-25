// yaha se sbb cheez bheja jata h sbko 


import React from "react";
import UserContext from "./userContext";

// children ke andar sbb element rhta h jisko data bhejna h ya fir jisse data lena h 
const UserContextProvider = ({children})=> {

    // isse data store krte h and use krte h 
    const [user,setuser] = React.useState(null)
    return(


        //value mein jitna v dat ah wo sb transfer hota h 
        <UserContext.Provider value={{user,setuser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;