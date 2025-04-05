// import 
import './Collection.css'
import Product from '../Product/Product.jsx'
import productsArray from '../../productArray.js' 

// create function and export default 
export default function Collection({title ,text, children}){

    return(
        <div className="collection-container">
            <div className="collection-header-container">
                <h1 className='collection-title'>{title}</h1>
                <h3 className='collection-discription'>{text}</h3>

                <div className='button-container'>
                    {children}
                </div>
            </div>

            <div className="product-box-container">
                {/* set map on array  */}
                {productsArray.map(product =>(
                    <Product {...product} key={product.id}/>
                ))}
            </div>
            
        </div>
    )
}
