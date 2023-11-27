import styles from './Dropdown.module.scss'
import { useState } from 'react'

const Dropdown = ({ option, selected, select, title }) => {
  const [isOpen, setIsOpen] = useState(false)
  const selectDropdown = (item) => {
    select(item)
    setIsOpen(false)
  }

  return(
    <>
      <div className={ styles.dropdownTitle }>{ title }</div>
      <div className={ styles.dropdown }>
        <div className={ styles.dropdownSelected } onClick={ () => { setIsOpen(!isOpen) } }>
          { selected ? selected : 'Option' }
          <i className={ `${styles.dropdownArrow} ${ isOpen && styles.dropdownArrowRotate }` }/>
        </div>
        <div className={ `${ styles.dropdownOption } ${ isOpen && styles.dropdownOptionShow }` }>
          {
            option.map((item, index) => (
              <span 
                className={ styles.dropdownButton } 
                key={ `dropdown-${ index }` }
                onClick={ () => { selectDropdown(item) } }
              >
                { item }
              </span>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Dropdown