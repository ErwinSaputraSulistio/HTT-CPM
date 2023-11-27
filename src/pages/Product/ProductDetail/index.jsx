import HTMLReactParser from 'html-react-parser'
import { Popup } from 'components'
import styles from './ProductDetail.module.scss'

const ProductDetail = ({ closeDetail, selected }) => {
  return(
    <Popup close={ () => { closeDetail() } } title='Product Detail'>
      <div className={ styles.productDetailContainer }>
        {
          selected.imageUrl &&
          <img alt='invalid-image-url' className={ styles.productDetailImage } src={ selected.imageUrl }/>
        }
        <article className={ styles.productDetail }>
          <div className={ styles.productDetailData }>
            <span className={ styles.productDetailLabel }>Name</span> 
            <span className={ styles.productDetailDescription }>{ selected.name }</span>
          </div>
          <div className={ styles.productDetailData }>
            <span className={ styles.productDetailLabel }>SKU</span> 
            <span className={ styles.productDetailDescription }>{ selected.sku }</span>
          </div>
          <div className={ styles.productDetailData }>
            <span className={ styles.productDetailLabel }>Brand</span> 
            <span className={ styles.productDetailDescription }>{ selected.brand }</span>
          </div>
          <div className={ styles.productDetailData }>
            <span className={ styles.productDetailLabel }>Variety</span>
            { 
              selected.variety.length > 0 ? 
              <table className={ styles.productVarietyTable }>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>SKU</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    selected.variety.map((item, index) => (
                      <tr className={ styles.productVarietyData } key={ `variety-${ index }` }>
                        <td>{ item.name }</td>
                        <td>{ item.sku }</td>
                        <td>{ item.price }</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
              :
              <span className={ styles.productDetailDescription }>No varieties yet</span>
            }
          </div>
          <div className={ styles.productDetailData }>
            <span className={ styles.productDetailLabel }>Description</span> 
            <div>
              { HTMLReactParser(selected.description) }
            </div>
          </div>
        </article>
      </div>
    </Popup>
  )
}

export default ProductDetail