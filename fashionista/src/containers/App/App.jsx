import React from 'react';

import './App.css';

import { BrowserRouter } from "react-router-dom";

import Topbar from '../Topbar/Topbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
