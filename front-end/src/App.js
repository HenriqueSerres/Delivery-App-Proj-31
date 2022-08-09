import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SellerOrders from './pages/SellerOrders';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/seller/orders" component={ SellerOrders } />
      </Switch>
    </main>
  );
}

export default App;
