import React from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import ContextLogin from './ContextLogin';
import ContextRegister from './ContextRegister';

function ContextProvider({ children }) {
  const { contextLoginObj } = ContextLogin();
  const { contextRegisterObj } = ContextRegister();

  const context = {
    ...contextLoginObj,
    ...contextRegisterObj,
  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.element,
};

ContextProvider.defaultProps = {
  children: <>default</>,
};

export default ContextProvider;
