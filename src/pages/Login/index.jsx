import { Authentication, Button, Input, Logo } from 'components'
import styles from './Login.module.scss'
import { useLogin } from 'hooks/useAuthentication'
import useGlobalContext from 'hooks/useGlobalContext'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

const Login = () => {
  const loginAPI = useLogin()
  const { setCurrentUser } = useGlobalContext()
  const navigate = useNavigate()
  const usernameRef = useRef()
  const passwordRef = useRef()

  const postLogin = async(e) => {
    try {
      e.preventDefault()
      const loginData = {
        username: usernameRef.current.value,
        password: passwordRef.current.value
      }
      const result = await loginAPI(loginData)
      if(result) {
        setCurrentUser(result)
        localStorage.setItem('currentUser', JSON.stringify(result))
        navigate('/')
      }
    }
    catch(err) { alert(err) }
  }

  return(
    <Authentication>
      <form className={ styles.login } onSubmit={ postLogin }>
        <Logo height={ 100 } width={ 100 }/>
        <div className={ styles.loginInputs }>
          <Input 
            name='Username' 
            placeholder='Input username?' 
            ref={ usernameRef } 
            type='text'
          />
          <Input 
            name='Password'
            placeholder='Input password?' 
            ref={ passwordRef } 
            type='password'
          />
        </div>
        <Button
          mode='dark'
          name='Login'
          width='100%'
        />
        <div className={ styles.registerNavigation }>
          Don't have an account yet?
          <span 
            className={ styles.registerButton } 
            onClick={ () => { navigate('/register') } }
          >
            Register
          </span>
        </div>
      </form>
    </Authentication>
  )
}

export default Login