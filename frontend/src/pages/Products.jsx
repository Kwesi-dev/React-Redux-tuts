import { useEffect } from 'react'
import Product from '../components/Product'
import './products.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchproducts } from '../redux/productSlice'
const Products = () => {
    const dispatch = useDispatch()

    const products = useSelector(state=>state.productReducer.products)
    console.log(products);

    useEffect(()=>{
        dispatch(fetchproducts())        
    },[dispatch])
    return (
        <div className="products">
            {products.map((product)=>
                <Product key={product._id} product={product}/>
            )}
        </div>
    )
}

export default Products
