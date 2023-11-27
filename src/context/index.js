import { createContext, useEffect, useState } from 'react'

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  // User List is to allow user register, and save to local storage (simulation only)
  // Remove User List later, if already integrated with real API
  const [userListSimulation, setUserListSimulation] = useState([])

  useEffect(() => {
    const currentUserFromLocalStorage = JSON.parse(localStorage.getItem('currentUser'))
    const userListSimulationFromLocalStorage = JSON.parse(localStorage.getItem('userListSimulation'))
    if(currentUserFromLocalStorage) { setCurrentUser(currentUserFromLocalStorage) }
    if(userListSimulationFromLocalStorage) { setUserListSimulation(userListSimulationFromLocalStorage) }
  }, [])

  useEffect(() => {
    localStorage.setItem('userListSimulation', JSON.stringify(userListSimulation))
  }, [userListSimulation])

  return(
    <GlobalContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        userListSimulation,
        setUserListSimulation
      }}
    >
      { children }
    </GlobalContext.Provider>
  )
}