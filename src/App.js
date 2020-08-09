import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import ItemMenu from './component/ItemMenu';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <ItemMenu></ItemMenu>
      </HashRouter>
    </div>
  );
}

export default App;
