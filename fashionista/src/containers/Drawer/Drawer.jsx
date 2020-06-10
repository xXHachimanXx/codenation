import React, { useEffect, useState } from 'react';
import { connect, useSelector, useDispatch } from "react-redux";
import { closeDrawer } from "../../store/actions/drawerActions";

import CartProduct from '../../components/CartProduct/CartProduct';

import "./Drawer.css";


const Drawer = () => {

  const dispatch = useDispatch();

  const store = useSelector(state => state.drawerReducer);
  const { products } = useSelector(state => state.productsReducer);

  const {
    visible,
    cartContext,
    searchContext,
    counter,
  } = store;


  const [searchedProducts, setSearchedProducts] = useState([]);

  async function handleSearchProducts(event) {
    event.preventDefault();

    setSearchedProducts([]);
    const searchText = event.target.value.toUpperCase();

    const aux = await products.filter((p) => p.name.includes(searchText));
    setSearchedProducts(aux);
  }

  return (
    visible && (
      <div className="drawer">
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
          <div className={searchContext ? "drawer__product-list search-context" : "drawer__product-list"}>
            {/*debug*/
              searchContext ?
                searchedProducts.map(p => (
                  <CartProduct key={p.code_color} product={p} />
                ))
                :
                <span className="cart__empty">Sua sacola está vazia :\</span>
            }
          </div>
          {
            cartContext &&
            <div className="drawer__footer"><span>Subtotal - R$ 00,00</span></div>
          }
        </div>
      </div>
    )
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