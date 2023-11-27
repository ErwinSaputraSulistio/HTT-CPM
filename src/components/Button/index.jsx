import styles from './Button.module.scss'

const Button = ({ click, customClass, margin, mode, name, width }) => {
  return(
    <button 
      className={
        `${ styles.button } ${ 
          mode === 'dark' ? styles.buttonDark
          :
          mode === 'light' ? styles.buttonLight
          :
          undefined
        } ${ customClass ? customClass : undefined }`
      }
      onClick={ () => { click && click() } }
      style={{ margin, width }}
    >
      { name }
    </button>
  )
}

export default Button