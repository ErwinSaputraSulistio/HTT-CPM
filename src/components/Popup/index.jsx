import { useState } from 'react'
import styles from './Popup.module.scss'

const Popup = ({ children, close, title }) => {
  const [isClosing, setIsClosing] = useState(false)
  const closePopup = () => {
    setIsClosing(true)
    setTimeout(() => {
      close()
    }, 450)
  }
  
  return(
    <section className={`${ styles.popupContainer } ${ isClosing && styles.popupContainerClosing }`}>
      <main className={`${ styles.popup } ${ isClosing && styles.popupClosing }`}>
        <header className={`${ styles.popupTop } ${ isClosing && styles.popupInsideClosing }`}>
          <span>{ title }</span>
          <div className={ styles.popupCloseButton } onClick={ () => { closePopup() } }>
            <div className={ styles.popupCloseButtonBarOne }/>
            <div className={ styles.popupCloseButtonBarTwo }/>
          </div>
        </header>
        <article className={`${ styles.popupBottom } ${ isClosing && styles.popupInsideClosing }`}>
          { children }
        </article>
      </main>
    </section>
  )
}

export default Popup