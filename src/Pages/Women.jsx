// import React,{useContext} from 'react'
// import women_banner from '../Components/Assets/banner_women.png'
// import { ShopContext } from '../Context/ShopContext'
// import './Women.css'
// import dropdown_icon from '../Components/Assets/dropdown_icon.png'
// import { Item } from '../Components/Item/Item'
// import all_product from '../Components/Assets/all_product'

// export const Women = (props) => {
//     const {all_product} = useContext(ShopContext)

// const women = all_product.filter(person => person.category === 'women');

//   return (
//     <div className='shop-category'>
//     <img src={women_banner} alt="" />
//     <div className="mencategory-indexSort">
//       <p><span>Showing 1-12</span>out of 36 products</p>
//       <div className="mencategory-sort">
//         Sort by <img src={dropdown_icon} alt="" />
//       </div>
//     </div>
//     <div className="mencategory-products">
//      {
//       women.map((item,i)=>{
//            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
//        })
//      }
//     </div>
//    </div>
//   )
// }
