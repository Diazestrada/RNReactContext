import * as React from "react"

export const authContext = React.useMemo(() => ({
  signIn: async (data) => {
    console.log(data)
  },
  signOut: async () => { console.log('sali') }
}), [])