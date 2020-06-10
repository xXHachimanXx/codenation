import React, { useEffect } from 'react';
import Product from '../../components/Product/Product';
import { useSelector, useDispatch } from 'react-redux';

import { getProducts } from '../../store/actions/productsActions';

import './Showcase.css';

const Showcase = () => {

  const dispatch = useDispatch();

  const { products } = useSelector(state => state.productsReducer);

  useEffect(() => {

    if (products.length === 0)
      getProducts(dispatch);
  }, []);

  return (
    <section className="showcase">
      <div className="app__container">
        <div className="header__title">Número de produtos {products.length}</div>
      </div>
      <div className="app__container">
        <div className="products__grid">
          {
            products.length > 0 &&
            products.map((product, index) => (<Product key={index} data={product} />))
          }
        </div>
      </div>

    </section>
  );
}

/*
const mapStateToProps = state => {
  const { products } = state;

  return {
    products: products
  };
}
export default connect(mapStateToProps)(Showcase);
*/
export default Showcase;