import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SellerOrders from './pages/SellerOrders';
import PathRouter from './PathRouter';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
    <main>
      <Switch>
        <ContextProvider>
          <PathRouter />
          <Route path="/seller/orders" component={ SellerOrders } />
        </ContextProvider>
      </Switch>
    </main>
  );
}

export default App;
