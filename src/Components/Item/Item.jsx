import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './Item.css'
export const Item = (props) => {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
        <p>{props.name}</p>
        <div className='item-proce-new'>
            {props.new_price}
        </div>
        <div className="item-price-old">
            {props.old_price}
        </div>
    </div>
  )
}
 