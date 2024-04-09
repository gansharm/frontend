import React from 'react'
import './CartItems.css'
import { useContext } from 'react'
import remove_icon from '../Assets/cart_cross_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import { useState } from 'react'
export const CartItems = () => {

    const [textData,setTextData] = useState({
        text:""
    })

    const changeHandler = (e) =>{
        setTextData({...textData,[e.target.name]:e.target.value})
    }

    const Info = () =>{
        alert("Promo Code Applied...")
    }


    const {all_product,cartItem,removeFromCart,getTotalCartAmount} = useContext(ShopContext);
   return (
     <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
              {all_product.map((e)=>{
                if(cartItem[e.id]>0)
                {
                    return <div>
                    <div className="cartitems-format cartitems-format-main">
                        <img src={e.image} alt="" className='carticon-product-icon' />
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className="cartitems-quantity">{cartItem[e.id]}</button>
                        <p>${e.new_price*cartItem[e.id]}</p>
                        <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                    </div>
                    <hr />
                 </div>
                }
                return null;
              })}
              <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>cart Totals</h1>
                    <div>
                        <div className="cartitems-total-items">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-items">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-items">
                            <p>Total</p>
                            <p>${getTotalCartAmount( )}</p>
                        </div>
                        
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                     
                    </div>
                    <div className="cartitems-promocode">
                        <p>If you have a promo code, enter it here</p>
                        <div className="cartitems-promobox">
                            <input name='text' onChange={changeHandler} type="text" placeholder='promo code' />
                            <button onClick={()=>Info()}>Submit</button>
                        </div>
                </div>

              </div>
            </div>
 
             
     
  )
}
