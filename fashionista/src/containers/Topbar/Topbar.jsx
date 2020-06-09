import React from 'react';

import { Link } from 'react-router-dom';

import { openDrawerOnSearchContext } from "../../store/actions/drawerActions";

import './Topbar.css';

const Topbar = () => (
  <header className="topbar" data-testid="topbar">
    <div className="app__container">
      <Link to="/" className="topbar__logo">
        <img src="https://logos-download.com/wp-content/uploads/2016/11/Fashionista_logo_black.png"
          alt="Logo Fashionista" />
      </Link>

      <div className="topbar__group">
        <button className="topbar__icon--search" onClick={() => openDrawerOnSearchContext }>
          <Link to="/">
            <i className="fa fa-search" aria-hidden="true"></i>
          </Link>
        </button>

        <button className="topbar__icon--cart">
          <Link to="/">
            <i className="fa fa-shopping-cart" aria-hidden="true">
              <sup className="counter"><span className="counter__value">0</span></sup>
            </i>
          </Link>
        </button>
      </div>

    </div>
  </header>
);

export default Topbar;
