import React from 'react';

import CartProduct from '../../components/CartProduct/CartProduct';

import "./Drawer.css";

const Drawer = (show, context, counter, items = 0) => {
  show = true; // debug
  context = 'sacola';
  return (
    show &&
    <div className="drawer">
      <header className="drawer__header">
        <div className="drawer__header__title">
          <div className="drawer__header__icons">
            <button className="drawer__header__button--back">
              <i class="fas fa-arrow-left"></i>
            </button>
          </div>

          <div className="drawer__header__title__info">
            {context === 'sacola' ? <span>{`Sacola (${items})`}</span> : <span>{"Buscar Produtos"}</span>}
          </div>
        </div>
        {
          context === 'buscar' &&
          <div className="drawer__search">
            < input className="drawer__search__input" type="text" placeholder="Buscar por produto..." />
          </div>
        }
      </header>

      <div className="drawer__content">
        <div className="drawer__product-list">
          {/*debug*/
            context === 'sacola' &&
            <CartProduct />
            //<span class="cart__empty">Sua sacola está vazia :\</span>
          }
        </div>
        {/*debug*/
          //context === 'sacola' &&
          <div className="drawer__footer"><span>Subtotal - R$ 00,00</span></div>
        }
      </div>
    </div>
  );
};

export default Drawer;