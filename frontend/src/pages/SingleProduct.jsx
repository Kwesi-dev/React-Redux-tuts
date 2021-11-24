import './singleProduct.css'
import { useLocation } from 'react-router'
import { useEffect, useState } from 'react'
import { axiosInstance } from '../requestMethods'


const SingleProduct = () => {
    const location = useLocation()
    const productId = location.pathname.split("/")[2]
    const [product, setProduct] = useState({})

    useEffect(()=>{
       const getProduct = async () => {
           try{
                const res = await axiosInstance('/products/find/'+ productId)
                setProduct(res.data)
           }catch{}
       } 
       getProduct()
    },[productId])

    return (
        <div className="singleProduct">
            <div className="singlePWrapper">
                <div className="left">
                    <img src={product.image} alt="" className="leftImg"/>
                </div>
                <div className="right">
                    <span className="rightItem title">{product.title}</span>
                    <span className="rightItem desc">{product.desc}</span>
                    <span className="rightItem price">$ {product.price}</span>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
