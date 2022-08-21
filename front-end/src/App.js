import React from 'react';
import './App.css';
import { Switch } from 'react-router-dom';
import PathRouter from './PathRouter';

function App() {
  return (
    <main>
      <Switch>
        <PathRouter />
      </Switch>
    </main>
  );
}

export default App;
