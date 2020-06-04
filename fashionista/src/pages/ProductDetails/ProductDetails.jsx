import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { DEFAULT_PRODUCT_IMAGE } from "../../utils/constants";
import { getCatalog } from "../../services/api";

import Topbar from "../../containers/Topbar/Topbar";

import './ProductDetails.css';


const ProductDetails = () => {

  const [product, setProduct] = useState({});

  useEffect(() => {
    getCatalog().then(data => setProduct(data[0]));
  }
    , [product]);

  return (
    <div className="app__container">
      <Topbar />
      <div className="product__details">
        <figure className="product__details__image">
          <img
            src={product.image}
            alt="Produto VESTIDO TRANSPASSE BOW"
            title="VESTIDO TRANSPASSE BOW"
          />
        </figure>

        <div className="product__details__content">
          <h3 className="product__details__name">{product.name}</h3>

          <div className="product__details__pricing">
            <span className="product__details__price product__details__price--to">{product.regular_price}</span>
            <span className="product__details__price product__details__price--installments"> em até {product.installments}</span>
          </div>

          <div className="product__details__sizes">
            <p>Escolha o tamanho</p>
            <div className="product__details__btnGroup">
              {/* <ButtonSizes> */}
            </div>
          </div>

          <div className="product__details__actions">
            <button className="product__details__addToCart">
              Adicionar ao carrinho
            </button>
          </div>
        </div>



      </div>
    </div>
  )
}
export default ProductDetails;

