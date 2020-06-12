import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { DEFAULT_PRODUCT_IMAGE } from "../../utils/constants";
import { removeCartProduct, increaseCartProductQuantity, } from "../../store/actions/cartActions";

import './CartProduct.css';

function CartProduct({ product, context = false }) {

  const productDetails = useSelector(state => state.productReducer);
  const { cart } = useSelector(state => state.cartReducer);

  console.log("cart: " + productDetails.quantity)
  const dispatch = useDispatch();

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
                <p className="cart__product__size"><span>Tam.: {product.size}</span></p>
                <div className="cart__product__quantity">
                  <button className="cart__product__icons" onClick={() => { --product.quantity }}>
                    <i className="fas fa-minus"></i>
                  </button>
                  <div className="cart__product__input">{
                    cart.productDetails.quantity
                  }</div>
                  <button className="cart__product__icons" onClick={() => { ++product.quantity }}>
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </>
            }
          </div>

          <div className="cart__product__pricing">
            <div className="cart__product__price">{product.actual_price}</div>
            <div className="cart__product__installments">{product.installments}</div>
          </div>

        </div>
      </Link>
      {
        context &&
        <div className="cart__product__remove" onClick={() => dispatch(removeCartProduct)}>
          <span> Remover item </span>
        </div>
      }
    </div>
  );
}

export default CartProduct;