import { forwardRef } from 'react'
import styles from './Input.module.scss'

const Input = forwardRef(({
  name,
  placeholder,
  type
}, ref) => {
  return(
    <>
      { name && <label className={ styles.label } htmlFor={ name }>{ name }</label> }
      <input 
        className={ styles.input }
        id={ name }
        placeholder={ placeholder }
        ref={ ref }
        required
        type={ type }
      />
    </>
  )
})

export default Input