import './product.css'
import { Link } from 'react-router-dom'
const Product = ({ product }) => {
    return (
        <div className="product">
            <div className="productImgContainer">
                <img className="productImg" src={product.image} alt="" />
            </div>
            <Link to={`/product/${product._id}`}>
                <div className="viewContainer">
                    <span className="viewItem">view product</span>
                </div>
            </Link>
        </div>
    )
}

export default Product
