import React, { createContext, useContext, useEffect, useState } from "react";

const MyContext = createContext();

const AppProvider = ({children}) => {
  const [session, setSession] = useState(false)

  const logueado = ()=>{

    const token = localStorage.getItem('token')
    if(token){
      setSession(true)
    } else {
      setSession(false)
    }

  }

  useEffect(()=>{
    logueado()
  },[])

  return(
    <MyContext.Provider
    value={{session, setSession}}
    >{children}</MyContext.Provider>

  )
}

export const useGlobalContext = () => {
  return useContext(MyContext)
}

export { MyContext, AppProvider}


