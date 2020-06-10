import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from "react-redux";
import { closeDrawer } from "../../store/actions/drawerActions";

import CartProduct from '../../components/CartProduct/CartProduct';

import "./Drawer.css";


const Drawer = () => {

  const { 
    visible, 
    cartContext, 
    searchContext, 
    counter 
  } = useSelector(state => state.drawerReducer.drawer);

  const dispatch = useDispatch();

  return (
    <div className={visible ? "drawer" : ""}>
      <header className="drawer__header">
        <div className="drawer__header__title">
          <div className="drawer__header__icons">
            <button className="drawer__header__button--back" onClick={() => closeDrawer(dispatch)}>
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
          <div className={visible ? "drawer__footer" : ""}><span>Subtotal - R$ 00,00</span></div>
        }
      </div>
    </div>
  );
};

/*
const mapStateToProps = state => {
  const { drawer } = state;

  return {
    drawer: {
      visible: state.drawerReducer.drawer.visible,
      cartContext: state.drawerReducer.drawer.cartContext,
      searchContext: state.drawerReducer.drawer.searchContext,
      counter: state.drawerReducer.drawer.counter,
    }
  };
}
export default connect(mapStateToProps)(Drawer);
*/

export default Drawer;