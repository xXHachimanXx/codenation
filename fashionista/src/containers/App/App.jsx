import React from 'react';

import './App.css';

import { BrowserRouter } from "react-router-dom";

import Topbar from '../Topbar/Topbar';
import Routes from '../../routes/index';
import Drawer from '../Drawer/Drawer';

import { INITIAL_STATE } from "../../store/initialState";

import { Provider } from 'react-redux';

import store from '../../store/index';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Topbar />
          <Routes />
          <Drawer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
