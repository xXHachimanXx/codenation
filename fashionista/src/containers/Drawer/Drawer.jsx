import React from 'react';

import "./Drawer.css";

const SizeButton = (counter) => {
  return (
    <div className="drawer">
      <header className="drawer-header">
        <div className="app__container">
          <div className="drawer-header__title">
            <div className="drawer-header__icons">
              <button className="drawer-header__button--back">
                <i class="fas fa-arrow-left"></i>
              </button>
            </div>

            <div className="drawer-header__title-info">Sacola 0</div>
          </div>
        </div>
      </header>

      <div className="drawer-content"></div>

      <div className="drawer-footer"></div>
    </div>
  );
};

export default SizeButton;