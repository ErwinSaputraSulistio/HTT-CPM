import { Button } from 'components'
import styles from './Variety.module.scss'

const Variety = ({ data, set }) => {
  const varietyCreate = () => {
    set([
      ...data, 
      { 
        name: '', 
        sku: '', 
        price: 0 
      }
    ])
  }
  const varietyUpdate = (e, index) => {
    let newArray = [...data]
    newArray[index] = {
      ...newArray[index],
      [e.target.name]: e.target.value
    }
    set(newArray)
  }
  const varietyDelete = (index) => {
    let newArray = [...data]
    newArray.splice(index, 1)
    set(newArray)
  }

  return(
    <div className={ styles.variety }>
      { data.length > 0 && <span className={ styles.varietyTitle }>Variety</span> }
      { 
        data.map((item, index) => (
          <div className={ styles.varietyGroup } key={ `variety-${ index }` }>
            <input 
              className={ styles.varietyInput } 
              name='name'
              onChange={ (e) => { varietyUpdate(e, index) } }
              placeholder='Name' 
              required 
              type='text'
              value={ item.name }
            />
            <input 
              className={ styles.varietyInput } 
              name='sku'
              onChange={ (e) => { varietyUpdate(e, index) } }
              placeholder='SKU' 
              required 
              type='text'
              value={ item.sku }
            />
            <input 
              className={ styles.varietyInput } 
              name='price'
              onChange={ (e) => { varietyUpdate(e, index) } }
              placeholder='Price' 
              required 
              type='number'
              value={ item.price }
            />
            <div
              className={ styles.removeVarietyButton }
              onClick={ () => { varietyDelete(index) } }
            >
              Remove
            </div>
          </div>
        )) 
      }
      <div 
        className={ styles.addVarietyButton }
        onClick={ () => { varietyCreate() } }
      >
        Add Variety
      </div>
    </div>
  )
}

export default Variety