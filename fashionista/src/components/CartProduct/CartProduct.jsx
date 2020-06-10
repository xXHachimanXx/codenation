import React from 'react';

import { Link } from "react-router-dom";
import { DEFAULT_PRODUCT_IMAGE } from "../../utils/constants";

import './CartProduct.css';



function CartProduct({ product, context = false }) {
  return (
    <div className="cart__product">
      <Link to={`/produto/${product.code_color}`}>
        <div className="cart__product__content">
          <figure className="cart__product__image">
            <img src={product.image || DEFAULT_PRODUCT_IMAGE} alt={product.name} />
          </figure>

          <div className="cart__product__info">
            <p className="cart__product__name">{product.name}</p>
            {context &&
              <>
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
              </>
            }
          </div>

          <div className="cart__product__pricing">
            <div className="cart__product__price">R$ 149,00</div>
            <div className="cart__product__installments">3x R$ 49,97</div>
          </div>
        </div>
      </Link>
      {
        context &&
        <div className="cart__product__remove">
          <span> Remover item </span>
        </div>
      }
    </div>
  );
}

export default CartProduct;