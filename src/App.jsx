import React from 'react';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ProductsContextComponent } from '../../Context/ProductsContext'
import { CartContextComponent } from './Context/CartContext';
import { Header } from './Components/Header';
import { ItemListContainer } from './Containers/ItemListContainer';
import { ItemDetailContainer } from './Containers/ItemDetailContainer';
import { Cart } from './Components/Cart';
import { Checkout } from './Components/Checkout'
import { Footer } from './Components/Footer';

const App = () => { 
    return (
      <ProductsContextComponent>
      <CartContextComponent>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={ItemListContainer}/>
            <Route path="/category/:category" component={ItemListContainer}/>
            <Route path="/producto/:id" component={ItemDetailContainer}/>
            <Route path="/cart" component={Cart}/>
            <Route path='/checkout' component={Checkout}/>
          </Switch> 
          <Footer /> 
        </BrowserRouter>
      </CartContextComponent> 
      </ProductsContextComponent>
  )
}

export default App;
