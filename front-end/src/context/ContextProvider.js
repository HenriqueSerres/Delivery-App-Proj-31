import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import ContextLogin from './ContextLogin';
import ContextRegister from './ContextRegister';
import ContextShoppingCart from './ContextShoppingCart';
import ContextProducts from './ContextProducts';
import ContextSellerOrders from './ContextSellerOrders';

function ContextProvider({ children }) {
  const { contextLoginObj } = ContextLogin();
  const { contextRegisterObj } = ContextRegister();
  const { contextShoppingCart } = ContextShoppingCart();
  const { contextProductsObj } = ContextProducts();
  const { contextSellerOrdersObj } = ContextSellerOrders();

  const context = useMemo(() => ({
    ...contextLoginObj,
    ...contextRegisterObj,
    ...contextProductsObj,
    ...contextShoppingCart,
    ...contextSellerOrdersObj,
  }), [contextLoginObj,
    contextRegisterObj,
    contextProductsObj,
    contextShoppingCart,
    contextSellerOrdersObj]);

  return <Context.Provider value={ context }>{children}</Context.Provider>;
}

ContextProvider.propTypes = {
  children: PropTypes.element,
};

ContextProvider.defaultProps = {
  children: <>default</>,
};

export default ContextProvider;
