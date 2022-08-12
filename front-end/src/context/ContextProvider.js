import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import ContextLogin from './ContextLogin';
import ContextRegister from './ContextRegister';
import ContextShoppingCart from './ContextShoppingCart';
import ContextProducts from './ContextProducts';

function ContextProvider({ children }) {
  const { contextLoginObj } = ContextLogin();
  const { contextRegisterObj } = ContextRegister();
  const { contextShoppingCart } = ContextShoppingCart();
  const { contextProductsObj } = ContextProducts();

  const context = useMemo(() => ({
    ...contextLoginObj,
    ...contextRegisterObj,
    ...contextProductsObj,
    ...contextShoppingCart,
  }), [contextLoginObj,
    contextRegisterObj,
    contextProductsObj,
    contextShoppingCart]);

  return <Context.Provider value={ context }>{children}</Context.Provider>;
}

ContextProvider.propTypes = {
  children: PropTypes.element,
};

ContextProvider.defaultProps = {
  children: <>default</>,
};

export default ContextProvider;
