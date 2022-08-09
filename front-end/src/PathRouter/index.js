import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Products from '../pages/Products';
import ShoppingCart from '../pages/ShoppingCart';

function PathRouter() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/customer/products" component={Products} />
      <Route path="/customer/checkout" component={ShoppingCart} />
      <Route exact path="/" component={Login} />
    </Switch>
  );
}

export default PathRouter;
