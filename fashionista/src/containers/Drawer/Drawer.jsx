import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { closeDrawerAction, setSearchedProducts } from "../../store/actions/drawerActions";
import { getProducts } from "../../store/actions/productsActions";


import CartProduct from '../../components/CartProduct/CartProduct';

import "./Drawer.css";


const Drawer = () => {

  const dispatch = useDispatch();

  const store = useSelector(state => state.drawerReducer);
  const  searchedProducts  = store.searchedProducts;

  const { products } = useSelector(state => state.productsReducer);
  const { cart } = useSelector(state => state.cartReducer);

  const {
    visible,
    cartContext,
    searchContext,
    counter,
  } = store;

  async function handleSearchProducts(event) {
    event.preventDefault();
    const searchText = await event.target.value.toUpperCase();

    if(products.length === 0) await getProducts(dispatch);

    const aux = await products.filter((p) => p.name.includes(searchText));

    await dispatch(setSearchedProducts(aux));
  }

  return (
    <div className={`drawer ${visible ? 'drawer--is-visible' : ''}`}>
      <header className="drawer__header">
        <div className="drawer__header__title">
          <div className="drawer__header__icons">
            <button className="drawer__header__button--back" onClick={() => dispatch(closeDrawerAction())}>
              <i className="fas fa-arrow-left"></i>
            </button>
          </div>

          <div className="drawer__header__title__info">
            {cartContext && !searchContext ? <span>{`Sacola (${counter})`}</span> : <span>{"Buscar Produtos"}</span>}
          </div>
        </div>

      </header>

      <div className="drawer__content">
        {
          !cartContext && searchContext &&
          <div className="drawer__search">
            <input
              className="drawer__search__input"
              type="text"
              placeholder="Buscar por produto..."
              onChange={(event) => handleSearchProducts(event)}
            />
          </div>
        }
        {
          searchContext ?
            <div className="drawer__product-list search-context">
              {
                searchedProducts.map(p => (
                  <CartProduct key={p.code_color} product={p} />
                ))
              }
            </div>
            :
            <div className="drawer__product-list">
              {
                cart ?
                  cart.map((p, index) => <CartProduct key={index} product={p} context={cartContext} />)
                  :
                  <span className="cart__empty">Sua sacola está vazia :\</span>
              }
            </div>
        }
        {
          cartContext &&
          <div className="drawer__footer"><span>Subtotal - R$ 00,00</span></div>
        }
      </div>
    </div>
  )
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