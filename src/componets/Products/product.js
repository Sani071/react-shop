import "../css/product/card.css"
import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Productviewcard extends Component {
   
    favHandler(id) {
        
        this.props.addToFav(id)
    }
    cartHandler(id) {
        
        this.props.addToCart(id)
    }
    render() {
        let { product } = this.props
        return (
            <div>
                <div className="product-card">
                    <div className="badge">Hot</div>
                    <div className="product-tumb product-img">
                        <img src={product.img} alt="myapp" />
                    </div>
                    <div className="product-details">
                        <span className="product-catagory">{product.type}</span>
                        <h5><a>{product.showName}</a></h5>
                        <div className="product-bottom-details">
                            <small className="product-price-small">$96.0</small>
                            <div className="product-price pointer">${product.price}</div>

                        </div>
                        <div className="product-links">
                            <a><i
                                onClick={() => this.favHandler(product.id)}
                                className={`fa fa-heart heart  pointer ${product.isFav ? " text-danger" : ""}`}></i></a>
                            <a><i
                                onClick={() => this.cartHandler(product.id)}
                                className={`fa fa-shopping-cart cart pointer  ${product.isSelected ? " text-info" : ""}`}></i></a>
                        </div>
                    </div>
                    <Link  to={`/product/${product.id}`} ><h6 className=" hel pointer">Details</h6></Link>
                    
                </div>
            </div>
        )
    }
}
