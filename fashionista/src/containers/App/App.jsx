import React from 'react';

import './App.css';

import { BrowserRouter } from "react-router-dom";

import Topbar from '../Topbar/Topbar';
import Routes from '../../routes/index';
import Drawer from '../Drawer/Drawer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <Routes />
        <Drawer />
      </BrowserRouter>
    </div>
  );
}

export default App;
