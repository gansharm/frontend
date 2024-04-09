import React from 'react'
 import all_product from '../Assets/all_product'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
export const Breadcrum = (props) => {
 const {product} =  props;     
      // console.log('Product Data:', product);
  return (
    
    <div className='breadcrum'>
        
       HOME 
       <img src={arrow_icon} alt="" />
       SHOP
        <img src={arrow_icon} alt="" />
       { product.category}
       <img src={arrow_icon} alt="" />
       {product.name} 
    </div>
   )
} 
