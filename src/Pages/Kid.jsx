import React from 'react'
import { Item } from '../Components/Item/Item';
import kid_banner from '../Components/Assets/banner_kids.png'
import all_product from '../Components/Assets/all_product';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import './Kid.css'
export const Kid = () => {
    const kid = all_product.filter(person => person.category === 'kid');

  return (
    <div className='shop-category'>
    <img src={kid_banner} alt="" />
    <div className="mencategory-indexSort">
      <p><span>Showing 1-12</span>out of 36 products</p>
      <div className="mencategory-sort">
        Sort by <img src={dropdown_icon} alt="" />
      </div>
    </div>
    <div className="mencategory-products">
     {
      kid.map((item,i)=>{
        
           return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        
       })
     }
    </div>
   </div>
  )
}
