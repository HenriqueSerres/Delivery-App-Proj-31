import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SellerOrders from './pages/SellerOrders';
import PathRouter from './PathRouter';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
    <main>
      <ContextProvider>
        <Switch>
            <Route path="/seller/orders" component={ SellerOrders } />
            <PathRouter />
        </Switch>
      </ContextProvider>
    </main>
  );
}

export default App;
