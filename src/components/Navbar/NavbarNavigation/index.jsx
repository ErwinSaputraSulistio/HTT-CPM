import { Link } from 'react-router-dom'
import styles from './NavbarNavigation.module.scss'

const navigations = [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/product',
    name: 'Product'
  }
]

const NavbarNavigation = ({ isHamburgerClicked }) => {
  return(
    <div className={ styles.navbarNavigation }>
      {
        navigations.map((item, index) => (
          <Link 
            className={ styles.navbarNavigationButton } 
            key={ index }
            onClick={ () => isHamburgerClicked(false) }
            to={ item.path }
          >
            { item.name }
          </Link>
        ))
      }
    </div>
  )
}

export default NavbarNavigation