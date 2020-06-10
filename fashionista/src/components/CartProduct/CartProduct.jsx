import React from 'react';

import './CartProduct.css';



function CartProduct({product}) {
  return (
    <div className="cart__product">

      <div className="cart__product__content">
        <figure className="cart__product__image">
          <img src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002581_614_catalog_1.jpg?1459536611" alt="" />
        </figure>

        <div className="cart__product__info">
          <p className="cart__product__name">BATA DECOTE FLUID</p>
          <p className="cart__product__size"><span>Tam.: G</span></p>
          <div className="cart__product__quantity">
            <button className="cart__product__icons">
              <i className="fas fa-minus"></i>
            </button>
            <div className="cart__product__input">0</div>
            <button className="cart__product__icons">
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>

        <div className="cart__product__pricing">
          <div className="cart__product__price">R$ 149,00</div>
          <div className="cart__product__installments">3x R$ 49,97</div>
        </div>

      </div>

      <div className="cart__product__remove">
        <span> Remover item </span>
      </div>
    </div>
  );
}

export default CartProduct;