import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Products from '../pages/Products';
import ShoppingCart from '../pages/ShoppingCart';
import Orders from '../pages/Orders';
import Header from '../components/Products/Header';
import SellerOrders from '../pages/SellerOrders';

function PathRouter() {
  return (
    <Switch>
      <Route path="/seller/orders" component={ SellerOrders } />
      <Route
        path="/customer/orders/:id"
        render={ () => (
          <div>
            <Header />
            <span>Detalhes do Pedido</span>
          </div>
        ) }
      />
      <Route path="/customer/orders" component={ Orders } />
      <Route path="/customer/checkout" component={ ShoppingCart } />
      <Route path="/customer/products" component={ Products } />
      <Route path="/register" component={ Register } />
      <Route path="/login" component={ Login } />
      <Route exact path="/"><Redirect to="/login" /></Route>
    </Switch>
  );
}

export default PathRouter;
