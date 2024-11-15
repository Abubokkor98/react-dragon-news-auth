import { useState } from "react";
import { createContext } from "react"

export const AuthContext = createContext();

export default function AuthProvider({children}) {
    const [user, setUser] = useState({
        name: 'Abu Bokkor',
        email: 'abu@bokkor.com'
    })

    const userInfo = {
        user, setUser
    }

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  )
}
