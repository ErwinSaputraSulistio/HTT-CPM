import { Logo } from 'components'
import styles from './NavbarAside.module.scss'

const NavbarAside = ({ isHamburgerClicked, setIsHamburgerClicked }) => {
  const navbarHamburgerClassName = `${ styles.navbarHamburger } 
  ${ isHamburgerClicked ? styles.navbarHamburgerActive : undefined }`

  return(
    <aside className={ styles.navbarAside }>
      <div className={ styles.navbarLogoArea }>
        <Logo height='2em' width='2em'/>
        <span className={ styles.navbarLogoTitle }>CPM</span>
      </div>
      <div 
        className={ navbarHamburgerClassName }
        onClick={ () => { setIsHamburgerClicked(!isHamburgerClicked) } }
      >
        <span className={ styles.navbarHamburgerBar }/>
        <span className={ styles.navbarHamburgerBar }/>
        <span className={ styles.navbarHamburgerBar }/>
      </div>
    </aside>
  )
}

export default NavbarAside