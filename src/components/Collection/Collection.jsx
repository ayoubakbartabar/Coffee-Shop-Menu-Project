// import 
import './Collection.css'
import Product from '../Product/Product.jsx'
// create function and export default 
export default function Collection({title ,text, children}){
    
    // create Array
    const productsArray = [
        { id: 1, name: "Cappuccino", image: "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg", price: 5.20, rating: 4.7 , votes: 65, popular: true, available: true},
        { id: 2, name: "House Coffee", image: "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/house-coffee.jpg", price: 3.50, rating: 4.85 , votes: 15, popular: true, available: true},
        { id: 3, name: "Espresso", image: "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/espresso.jpg", price: 2.50,rating: 4.9, votes: 55 , popular: false , available: true},
        { id: 4, name: "Coffee Latte", image: "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/coffee-latte.jpg", price: 4.50,rating: 5 , votes: 23 , popular: false , available: true},
        { id: 5, name: "Chocolate Coffee", image: "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/chocolate-coffee.jpg", price: 4.00,rating: 4.65,votes: 122 , popular: false , available: false},
        { id: 6, name: "Valentine Special", image: "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/valentine-special.jpg", price: 5.50,rating: null ,votes: 0 , popular: false , available: true}
    ]
    
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
                {/* <Product {...productsArray[1]}/>
                <Product {...productsArray[2]}/>
                <Product {...productsArray[3]}/>
                <Product {...productsArray[4]}>
                    <div className='sold-out'>Sold out</div>
                </Product>
                <Product {...productsArray[5]}/> */}
            </div>
            
        </div>
    )
}
