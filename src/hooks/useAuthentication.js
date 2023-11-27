import useGlobalContext from './useGlobalContext'

// Login simulation, replace this later with real Login API
const useLogin = () => {
  const { userListSimulation } = useGlobalContext()
  
  return (input) => {
    return new Promise((resolve, reject) => {
      const isUserExist = userListSimulation.find(({ username }) => username === input.username)
      if(isUserExist) {
        if(isUserExist.password === input.password) { resolve(isUserExist) }
        else { reject('Wrong password') }
      }
      else { reject('Username is not registered yet') }
    })
  }
}
// Register simulation, replace this later with real Register API
const useRegister = () => {
  const { userListSimulation, setUserListSimulation } = useGlobalContext()

  return (input) => {
    return new Promise((resolve, reject) => {
      const isNicknameExist = userListSimulation.find(({ nickname }) => nickname === input.nickname)
      const isUsernameExist = userListSimulation.find(({ username }) => username === input.username)
      if(isNicknameExist) { reject('Nickname already exist') }
      else if(isUsernameExist) { reject('Username already exist') }
      else { 
        setUserListSimulation([
          ...userListSimulation,
          input
        ])
        resolve('Success') 
      }
    })
  }
}

export {
  useLogin,
  useRegister
}