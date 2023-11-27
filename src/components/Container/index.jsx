import { useLocation } from 'react-router-dom'
import styles from './Container.module.scss'
import { Navbar } from 'components'

const Container = ({ children }) => {
  const { pathname } = useLocation()

  return(
    <div className={ styles.container }>
      { 
        (pathname !== '/login' && pathname !== '/register') 
        && 
        <Navbar/> 
      }
      <main className={ styles.containerPage }>
        { children }
      </main>
    </div>
  )
}

export default Container