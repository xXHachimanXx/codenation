import React from 'react';

import './CartProduct.css';



function CartProduct() {
  return (
    <div className="cart__product">

      <div className="cart__product__content">
        <figure className="cart__product__image">
          <img src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002581_614_catalog_1.jpg?1459536611" alt="" />
        </figure>
        <div className="cart__product__info">
          <p className="cart__product__name"></p>
          <p className="cart__product__size"><span></span></p>
          <div className="cart__product__quantity">
            <button className="cart__icons"></button>
            <div className="product__cart__input">0</div>
            <button className="cart__icons"></button>
          </div>
        </div>
        <div className="cart__product__pricing"></div>
      </div>

      <div className="cart__product__remove">

      </div>
    </div>
  );
}

export default CartProduct;