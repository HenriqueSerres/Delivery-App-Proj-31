import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SellerOrders from './pages/SellerOrders';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/seller/orders"component={ SellerOrders } />
      </Switch>
    </div>
  );
}

export default App;
