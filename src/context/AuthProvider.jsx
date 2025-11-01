import React,{ createContext, useEffect, useState }  from 'react'
import { getItem, setItem } from '../utils/LocalStorage';



export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [userData, setuserData] = useState(null)

  useEffect(()=>{
    setItem();
  },[])

  useEffect(()=>{
  const {employees,admin} = getItem();
  setuserData({employees})
  },[])

  return (
    <AuthContext.Provider value={[userData,setuserData]}>
    <div>
      
        {children};
    </div>
    </AuthContext.Provider>
  )
}

export default AuthProvider