import React from 'react';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

import { LOGO } from "../../utils/constants";

import { openDrawerOnSearchContext, openDrawerOnCartContext } from "../../store/actions/drawerActions";

import './Topbar.css';

const Topbar = () => {
  const dispatch = useDispatch();

  const handleOpenSearchDrawer = async () => {
    await dispatch(openDrawerOnSearchContext());    
  }

  const handleOpenCartDrawer = async () => {
    await dispatch(openDrawerOnCartContext());
  }

  return (
    <header className="topbar" data-testid="topbar">
      <div className="app__container">
        <Link to="/" className="topbar__logo">
          <img src={LOGO}
            alt="Logo Fashionista" />
        </Link>

        <div className="topbar__group">
          <button className="topbar__icon--search" onClick={() => handleOpenSearchDrawer()}>
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>

          <button className="topbar__icon--cart" onClick={() => handleOpenCartDrawer()}>
            <i className="xora fa fa-shopping-cart" aria-hidden="true">
              <sup className="counter"><span className="counter__value">0</span></sup>
            </i>
          </button>
        </div>

      </div>
    </header>
  );
}

export default Topbar;
