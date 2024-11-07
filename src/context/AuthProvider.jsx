import { createContext, useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "../utils/localStorage"

export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
  // localStorage.clear()

  const [userData,setuserData]=useState(null)

  useEffect(()=>{
    setLocalStorage()
  const {employees} =getLocalStorage()
     setuserData(employees)
  },[])

  return (
    <div>
      <AuthContext.Provider value={[userData,setuserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
