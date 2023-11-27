import { Button } from 'components'
import { useEffect, useState } from 'react'
import styles from './Product.module.scss'
import ProductDetail from './ProductDetail'
import ProductForm from './ProductForm'
import ProductTable from './ProductTable'
import { dummyProducts } from 'assets/DummyData'

const Product = () => {
  const [productList, setProductList] = useState(dummyProducts)
  const [selectedProductIndex, setSelectedProductIndex] = useState(null)
  const [showProductDetail, setShowProductDetail] = useState(false)
  const [showProductForm, setShowProductForm] = useState(false)
  const [formAction, setFormAction] = useState('Create')
  
  const showProductUpdateForm = (index) => {
    setFormAction('Update')
    setSelectedProductIndex(index)
    setShowProductForm(true)
  }
  const showProductDetailPopup = (index) => {
    setSelectedProductIndex(index)
    setShowProductDetail(true)
  }
  const closeProductPopup = () => {
    setShowProductDetail(false)
    setShowProductForm(false)
    setFormAction('Create')
    setSelectedProductIndex(null)
  }

  useEffect(() => {
    const productListFromLocalStorage = JSON.parse(localStorage.getItem('productList'))
    if(productListFromLocalStorage) { setProductList(productListFromLocalStorage) }
  }, [])

  useEffect(() => {
    localStorage.setItem('productList', JSON.stringify(productList))
  }, [productList])

  return(
    <section className={ styles.productContainer }>
      <header className={ styles.productListHeader }>
        <span className={ styles.productListTitle }>Product List</span>
        <Button
          click={ () => { setShowProductForm(true) } }
          customClass={ styles.productListHeaderButton }
          mode='light'
          name='Add New Product'
          width='100%'
        />
      </header>
      <ProductTable 
        products={ productList }
        setProductList={ setProductList }
        showProductDetailPopup={ showProductDetailPopup }
        showProductUpdateForm={ showProductUpdateForm }
      />
      {
        showProductDetail &&
        <ProductDetail 
          closeDetail={ closeProductPopup }
          selected={ productList[selectedProductIndex] }
        />
      }
      {
        showProductForm &&
        <ProductForm 
          action={ formAction }
          closeForm={ closeProductPopup }
          productList={ productList }
          selectedIndex={ selectedProductIndex }
          selected={ productList[selectedProductIndex] }
          setProductList={ setProductList }
        />
      }
    </section>
  )
}

export default Product