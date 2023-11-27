import styles from './ProductTable.module.scss'
import { useMemo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faFilePen, faTrash } from '@fortawesome/free-solid-svg-icons'

const ProductTable = ({ products, setProductList, showProductDetailPopup, showProductUpdateForm }) => {
  const deleteProduct = (index) => {
    let newProducts = [...products]
    newProducts.splice(index, 1)
    setProductList(newProducts)
  }

  const productsMemo = useMemo(() => products.map((product, index) => (
    <tr 
      className={ styles.tableRow }
      key={`product-table-row-${index}`}
    >
      <td className={ styles.tableFirstColumn }>{ product.name }</td>
      <td className={ styles.tableSecondColumn }>
        <FontAwesomeIcon 
          className={ styles.productSettingButton } 
          icon={ faInfoCircle }
          onClick={ () => { showProductDetailPopup(index) } }
        />
        <FontAwesomeIcon 
          className={ styles.productSettingButton } 
          icon={ faFilePen }
          onClick={ () => { showProductUpdateForm(index) } }
        />
        <FontAwesomeIcon 
          className={ styles.productSettingButton } 
          icon={ faTrash }
          onClick={ () => { deleteProduct(index) } }
        />
      </td>
    </tr>
  )), [products])

  return(
    products.length > 0 &&
    <div className={ styles.productTable }>
      <table>
        <thead>
          <tr>
            <th className={ styles.tableFirstColumn }>Product Name</th>
            <th className={ styles.tableSecondColumn }>Setting</th>
          </tr>
        </thead>
        <tbody>
        { productsMemo }
        </tbody>
      </table>
    </div>
  )
}

export default ProductTable