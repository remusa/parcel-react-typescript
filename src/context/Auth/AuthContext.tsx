import React, { useContext, useState } from 'react'

interface IAuth {}

const AuthContext = React.createContext<IAuth | undefined>(undefined)

interface IProps {}

const AuthProvider: React.FC<IProps> = props => {
  const [data, setData] = useState<string | null>(localStorage.getItem('token') || null)

  // if (waitingForData) {
  // show a spinner
  // return <Spinner />
  // }

  const login = () => {}
  const register = () => {}
  const logout = () => {}

  return (
    <AuthContext.Provider
      value={{ data, login, register, logout }}
      {...props}
    ></AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
