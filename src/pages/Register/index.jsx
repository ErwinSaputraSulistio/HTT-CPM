import { Authentication, Button, Input, Logo } from 'components'
import styles from './Register.module.scss'
import { useRegister } from 'hooks/useAuthentication'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

const Register = () => {
  const registerAPI = useRegister()
  const navigate = useNavigate()
  const nicknameRef = useRef()
  const usernameRef = useRef()
  const passwordRef = useRef()

  const postRegister = async(e) => {
    try {
      e.preventDefault()
      const registerData = {
        nickname: nicknameRef.current.value,
        username: usernameRef.current.value,
        password: passwordRef.current.value
      }
      const result = await registerAPI(registerData)
      if(result) { 
        alert('Success')
        navigate('/login')
      }
    }
    catch(err) { alert(err) }
  }

  return(
    <Authentication>
      <form className={ styles.register } onSubmit={ postRegister }>
        <Logo height={ 100 } width={ 100 }/>
        <div className={ styles.registerInputs }>
          <Input 
            name='Nickname' 
            placeholder='New nickname?' 
            ref={ nicknameRef } 
            type='text'
          />
          <Input 
            name='Username' 
            placeholder='New username?' 
            ref={ usernameRef } 
            type='text'
          />
          <Input 
            name='Password'
            placeholder='New password?' 
            ref={ passwordRef } 
            type='password'
          />
        </div>
        <Button
          mode='dark'
          name='Register'
          width='100%'
        />
        <div className={ styles.loginNavigation }>
          Already have an account?
          <span 
            className={ styles.loginButton } 
            onClick={ () => { navigate('/login') } }
          >
            Login
          </span>
        </div>
      </form>
    </Authentication>
  )
}

export default Register