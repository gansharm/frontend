import './App.css';
 
import { Navbar } from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Route,
  } from "react-router-dom" ; 
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Cart } from './Pages/Cart';
import { Product } from './Pages/Product';
import { LoginSignup } from './Pages/LoginSignup';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Footer } from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from  './Components/Assets/banner_kids.png'
import { Men } from './Pages/Men';
import { Women } from './Pages/Women';
import { Kid } from './Pages/Kid';
 
   
function App() {
  
  return (
    <div>
      <Router>
      <Navbar />
      <Switch>
        
      <Route exact path='/'><Shop/></Route>

      <Route path='/mens' element={<ShopCategory banner={men_banner}  category="men"/>}><Men/></Route> 
        <Route path='/womens' element={<ShopCategory banner={women_banner}  category="women"/>}><Women/></Route>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}><Kid/></Route>

        {/* <Route path="/product"element={<Product/>}/> */}
          <Route path=':productId'><Product/></Route>
        <Product/>
        <Route path='/cart'><Cart/></Route>
        <Route path='/login'><LoginSignup/></Route>
      </Switch>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
