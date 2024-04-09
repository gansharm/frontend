import React,{useContext} from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Breadcrum } from '../Components/Breadcrums/Breadcrum';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import all_product from '../Components/Assets/all_product';

export const Product = (props) => {
  

if (product) {
  const category = product.category; // This line will only execute if product is defined
  console.log(category);
} else {
  console.error("Product is undefined.");
}


  const productData = {
    category: props.category,
    name: props.name,
      
  };
  
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id===Number(productId));
  
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product}/>
     </div>
    
  )
}
