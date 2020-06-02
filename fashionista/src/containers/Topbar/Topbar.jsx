import React from 'react';

import { Link } from 'react-router-dom';

import './Topbar.css';

const Topbar = () => (
  <header className="topbar" data-testid="topbar">
    <div className="app__container">
      <Link to="/" className="topbar__logo">
        <img src="https://logos-download.com/wp-content/uploads/2016/11/Fashionista_logo_black.png"
          alt="Logo Fashionista" />
      </Link>

      <div className="topbar__group">
        <button className="topbar__icon--search">
          <Link to="/">
            <i class="fa fa-search" aria-hidden="true"></i>
          </Link>
        </button>

        <button className="topbar__icon--cart">
          <Link to="/">
            <i class="fa fa-shopping-cart" aria-hidden="true">
              <sup class="counter"><span class="counter__value">0</span></sup>
            </i>
          </Link>
        </button>
      </div>

    </div>
  </header>
);

export default Topbar;
