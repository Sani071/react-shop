
import   "./new.css"
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import  {addCartAction} from "../../redux/actions/Products/productActionsCreator/addCartAction"
import React, { Component } from 'react'
import  {addCal} from "../../redux/actions/Products/productActionsCreator/addCalAction"
import  {subsCal} from "../../redux/actions/Products/productActionsCreator/subsCalAction"
import  {defaultCal} from "../../redux/actions/Products/productActionsCreator/defaultCal"
import Cartitem from "./cartItem.jsx";

 class Mycart extends Component {
   
  render() {
    let cartItems = this.props.cartItems
    let Mycart = cartItems.filter(cart => cart.isSelected)
    var cart  =null
      if(Mycart.length<1){
      cart = <div style={{backgroundColor:"#CACBCA"}}>
        <h6 className="mt-5 text-center" style={{color:"red"}}>My cart is now empty <span role="img">😒</span><small className="pointer text-info"><Link to="/">Shopping?</Link></small></h6>
        <img className="img-fluid" src={require("../../images/cart-empty.jpg")} alt="nothing..........."/>
      </div>
      }else{
        cart = <div className="container mt-2">
        <h5>My-Cart:  {Mycart.length}</h5><hr/><hr/>
        <div>
            <h1>Shopping Cart</h1>
    
    <div className="shopping-cart">
    
        <label className="myCart-image">image</label>
      <div className="column-labels">
        <label className="myCart-details">Product</label>
        <label className="myCart-price">Price</label>
        <label className="myCart-quantity">Quantity</label>
        <label className="myCart-removal">Remove</label>
        <label className="myCart-line-price">Total</label>
      </div>
    
      {Mycart.map(cart=><Cartitem 
      cart={cart} 
      removeFromCart={this.props.addCartAction}
      addCal={this.props.addCal}
      subCal={this.props.subsCal}
      initData={this.props.defaultCal}
      key={cart.id}/>)}
    
      <div className="totals">
        <div className="totals-item">
          <label>Subtotal</label>
          <div className="totals-value" id="cart-subtotal">{this.props.totall}</div>
        </div>
        <div className="totals-item">
          <label>Tax (5%)</label>
          <div className="totals-value" id="cart-tax">{this.props.totall*5/100}</div>
        </div>
        <div className="totals-item">
          <label>Shipping</label>
          <div className="totals-value" id="cart-shipping">15.00</div>
        </div>
        <div className="totals-item totals-item-total">
          <label>Grand Total</label>
          <div className="totals-value" id="cart-total">{this.props.totall*5/100 + this.props.totall+15}</div>
        </div>
      </div>
          
          <button className="checkout"><Link to="/product/checkout">Checkout</Link>  <span><i className="fa fa-paypal" aria-hidden="true"></i></span>
    <span><i className="fa fa-cc-mastercard" aria-hidden="true"></i></span></button>
   
    </div>
          </div>
        </div>
      }
    return (
      <div>{cart}</div>
    )
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.Products.Products,
  totall:state.Totall
})
export default connect(mapStateToProps,{addCartAction,addCal,subsCal,defaultCal})(Mycart)
