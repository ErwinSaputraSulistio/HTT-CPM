import { useState } from 'react'
import useGlobalContext from 'hooks/useGlobalContext'
import NavbarAdditional from './NavbarAdditional'
import NavbarAside from './NavbarAside'
import NavbarNavigation from './NavbarNavigation'
import styles from './Navbar.module.scss'

const Navbar = () => {
  const { currentUser } = useGlobalContext()
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false)

  // Dynamic HTML classes variables
  const navbarClassName = `${ styles.navbar }
  ${ isHamburgerClicked && styles.navbarMobileButtonClicked }`

  return(
    <nav className={ navbarClassName }>
      <NavbarAside
        isHamburgerClicked={ isHamburgerClicked }
        setIsHamburgerClicked={ setIsHamburgerClicked }
      />
      <section className={ styles.navbarItems }>
        { currentUser && <NavbarNavigation isHamburgerClicked={ setIsHamburgerClicked }/> }
        <NavbarAdditional/>
        <small className={ styles.navbarCopyrights }>
          Copyright 2023. Ciwin, All rights reserved.
        </small>
      </section>
    </nav>
  )
}

export default Navbar