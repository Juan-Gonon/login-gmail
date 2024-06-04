import { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, signInWithRedirect, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../api/firebase.config'

export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})

  const googleSingIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
  }

  const logOut = () => {
    signOut(auth)
  }

  useEffect(() => {
    const unSubCribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })

    return () => unSubCribe()
  }, [])

  return (
    <AuthContext.Provider value={{
      user,
      googleSingIn,
      logOut
    }}
    >
      {
        children
    }
    </AuthContext.Provider>
  )
}
