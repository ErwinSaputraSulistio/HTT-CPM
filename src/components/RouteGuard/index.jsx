import { Navigate, Outlet, useLocation } from 'react-router-dom'
// Hooks
import useGlobalContext from 'hooks/useGlobalContext'

const AuthGuard = ({ check }) => {
  const { currentUser } = useGlobalContext()
  const location = useLocation()

  return(
    check === 'Login' ?
    (
      currentUser ?
      <Navigate to='/' state={{ from: location }} replace/>
      :
      <Outlet/>
    )
    :
    check === 'NotLogin' ?
    (
      currentUser ?
      <Outlet/>
      :
      <Navigate to='/login' state={{ from: location }} replace/>
    )
    :
    null
  )
}

export default AuthGuard