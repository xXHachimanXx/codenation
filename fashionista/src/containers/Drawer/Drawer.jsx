import React, { useEffect } from 'react';
import { connect } from "react-redux";

import CartProduct from '../../components/CartProduct/CartProduct';

import { INITIAL_STATE } from '../../store/initialState';

import "./Drawer.css";


const Drawer = ({ visible, cartContext, searchContext, counter }) => {

  useEffect(() => {
    visible = INITIAL_STATE.drawer.visible;
    cartContext = INITIAL_STATE.drawer.cartContext;
    searchContext = INITIAL_STATE.drawer.searchContext;
    counter = INITIAL_STATE.drawer.counter;    
  }, []);

  return (
    <div className={visible ? "drawer" : ""}>
      <header className="drawer__header">
        <div className="drawer__header__title">
          <div className="drawer__header__icons">
            <button className="drawer__header__button--back">
              <i className="fas fa-arrow-left"></i>
            </button>
          </div>

          <div className="drawer__header__title__info">
            {cartContext && !searchContext ? <span>{`Sacola (${counter})`}</span> : <span>{"Buscar Produtos"}</span>}
          </div>
        </div>
        {
          !cartContext && searchContext &&
          <div className="drawer__search">
            < input className="drawer__search__input" type="text" placeholder="Buscar por produto..." />
          </div>
        }
      </header>

      <div className="drawer__content">
        <div className="drawer__product-list">
          {/*debug*/
            cartContext &&
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


const mapStateToProps = store => {
  console.log("storeeeeee");
  return {
    drawer: {
      visible: store.drawer.visible,
      cartContext: store.drawer.cartContext,
      searchContext: store.drawer.searchContext,
      counter: store.drawer.counter,
    }
  };
}
export default connect(mapStateToProps)(Drawer);

//export default Drawer;