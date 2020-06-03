import React from 'react';

import './App.css';

import { BrowserRouter } from "react-router-dom";

import Topbar from '../Topbar/Topbar';
import Routes from '../../routes/index';

import Showcase from "../Showcase/Showcase";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
