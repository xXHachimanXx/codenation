import React from 'react';

import "./Drawer.css";

const SizeButton = (counter) => {
  return (
    <div className="drawer">
      <header className="drawer__header">
        <div className="app__container">
          <div className="drawer__header__title">
            <div className="drawer__header__icons">
              <button className="drawer__header__button--back">
                <i class="fas fa-arrow-left"></i>
              </button>
            </div>

            <div className="drawer__header__title__info">Sacola (0)</div>
          </div>
        </div>
      </header>

      <div className="drawer__content">
        <div className="drawer__product-list"></div>
      </div>

      <div className="drawer__footer"></div>
    </div>
  );
};

export default SizeButton;