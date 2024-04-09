import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
export const Breadcrum = (props) => {
    const {product} = props;
    console.log('Product Data:', product);
  return (
    <div className='breadcrum'>
       HOME <img src={arrow_icon} alt="" />
       SHOP <img src={arrow_icon} alt="" />
       {  product.category}
       <img src={arrow_icon} alt="" />
       { product.name} 
    </div>
  )
} 
