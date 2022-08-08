import React from 'react';
import './App.css';
import PathRouter from './PathRouter';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <PathRouter />
    </ContextProvider>
  );
}

export default App;
