// import 
import './App.css'
import Header from '../Header/Header.jsx'
import Collection from '../Collection/Collection.jsx'
import Footer from '../Footer/Footer.jsx'

// create function and export default 
export default function App(){

    return(
        <>
            <Header background="/header-image/bg-cafe.jpg"/>

            <Collection title="Our Collection" text="Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.">
                <button className='all-product-btn'>All Products</button>   
                <button className='available-product-btn'>Available Now</button>   
            </Collection>

            <Footer/>
        </>
    )
}
