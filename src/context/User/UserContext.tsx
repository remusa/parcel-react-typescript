import React, { useContext } from 'react'
import { useAuth } from '~context/Auth/AuthContext'

interface IUser {}

const UserContext = React.createContext<IUser | undefined>(undefined)

interface IProps {}

const UserProvider: React.FC<IProps> = props => {
  return <UserContext.Provider value={useAuth().data.user} {...props} />
}

const useUser = () => useContext(UserContext)

export { UserProvider, useUser }
