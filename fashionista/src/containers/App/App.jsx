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
  const { drawer } = INITIAL_STATE.drawer;
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Topbar />
          <Routes />
          {
            console.log(store.getState)&&
            <Drawer />
            /*
            <Drawer
              visible={drawer.visible}
              cartContext={drawer.cartContext}
              searchContext={drawer.searchContext}
              counter={drawer.counter}
            />
            */
          }
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
