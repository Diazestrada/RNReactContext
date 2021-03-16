import React, { useState, useMemo } from 'react'

import { NavigationContainer } from '@react-navigation/native'

// stack 

import Splash from './public/splash'
import AuthStack from './public/auth'

export const AuthContext = React.createContext();

const AuthProvider = () => {


  const [isLoading, setLoading] = useState(false)

  const [user, setUser] = useState(null)


  const authContext = useMemo(() => ({
    signIn: async (data) => {
      console.log(data, 'auth')
      setUser(data)
    },
    signOut: async () => { setUser(null) }
  }), [])

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {isLoading ? (
          <Splash />
        ) : !isLoading && user === null ? (
          <AuthStack />
        ) : (
          <Splash />
        )}
      </NavigationContainer>
    </AuthContext.Provider>

    // <NavigationContainer initialRouteName="splash">
    //   {isLoading ? (
    //     <Splash />
    //   )
    //     : !isLoading && user === null ? (
    //       <AuthStack />
    //     )
    //       :
    //       <>
    //         < Splash />
    //       </>

    //   }

    // </NavigationContainer>
  )

}
export default AuthProvider
