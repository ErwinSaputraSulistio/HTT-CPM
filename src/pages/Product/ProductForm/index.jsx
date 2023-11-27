import { Button, Dropdown, Input, Popup, Variety } from 'components'
import styles from './ProductForm.module.scss'
import JoditEditor from 'jodit-react'
import { useEffect, useRef, useState } from 'react'
import { dummyBrands } from 'assets/DummyData'

const ProductForm = ({ action, closeForm, productList, selectedIndex, selected, setProductList }) => {
  const nameRef = useRef()
  const skuRef = useRef()
  const imageUrlRef = useRef()
  const descriptionRef = useRef()
  const [brand, setBrand] = useState(dummyBrands[0])
  const [variety, setVariety] = useState([])

  const createProduct = (e) => {
    e.preventDefault()
    setProductList([
      ...productList,
      {
        name: nameRef.current.value,
        sku: skuRef.current.value,
        imageUrl: imageUrlRef.current.value,
        description: descriptionRef.current.value,
        brand,
        variety: variety
      }
    ])
    closeForm()
  }
  const updateProduct = (e) => {
    e.preventDefault()
    let newProductList = [...productList]
    newProductList[selectedIndex] = {
      name: nameRef.current.value,
      sku: skuRef.current.value,
      imageUrl: imageUrlRef.current.value,
      description: descriptionRef.current.value,
      brand,
      variety
    }
    setProductList(newProductList)
    closeForm()
  }


  const updateInitialValues = () => {
    if(action === 'Update' && selected) {
      if(selected.name) { nameRef.current.value = selected.name }
      if(selected.sku) { skuRef.current.value = selected.sku }
      if(selected.imageUrl) { imageUrlRef.current.value = selected.imageUrl }
      if(selected.brand) { setBrand(selected.brand) }
      if(selected.variety && selected.variety.length > 0) { setVariety(selected.variety) }
    }
  }

  useEffect(() => {
    updateInitialValues()
  }, [])

  return(
    <Popup close={ () => { closeForm() } } title={ action }>
      <form 
        className={ styles.productForm } 
        onSubmit={ action === 'Update' ? updateProduct : createProduct }
      >
        <Input
          name='Name' 
          placeholder='Input product name here' 
          ref={ nameRef } 
          type='text'
        />
        <Input
          name='SKU' 
          placeholder='Input product SKU here' 
          ref={ skuRef }
          type='text'
        />
        <Input
          name='Image URL' 
          placeholder='Input product image URL here' 
          ref={ imageUrlRef }
          type='text'
        />
        <Dropdown 
          option={ dummyBrands } 
          selected={ brand }
          select={ setBrand }
          title='Brand'
        />
        <div className={ styles.description }>Description</div>
        <JoditEditor 
          ref={ descriptionRef } 
          value={ selected?.description && selected.description }
        />
        <Variety 
          data={ variety } 
          set={ setVariety }
        />
        <Button
          mode='dark'
          name={ action }
          width='100%'
        />
      </form>
    </Popup>
  )
}

export default ProductForm