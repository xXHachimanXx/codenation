import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import { DEFAULT_PRODUCT_IMAGE } from "../../utils/constants";
import { getProducts } from "../../store/actions/productsActions";

import Topbar from "../../containers/Topbar/Topbar";
import SizeButton from "../../components/SizeButton/SizeButton";
import Drawer from "../../containers/Drawer/Drawer";

import './ProductDetails.css';


const ProductDetails = () => {

  const { products } = useSelector(store => store.drawerReducer);

  const [product, setProduct] = useState({});

  const { code_color } = useParams();
  const testCounter = 0; // Debug

  useEffect(() => {
    if (products.length === 0 || product === null) {
      var productJSON = localStorage.getItem('@fashionista/product');
      setProduct(JSON.parse(productJSON)); // convertendo para JSON
      console.log(product);
      return;
    }
    let productAux = products.find((product) => product.code_color === code_color);
    
    setProduct(productAux);
    var productString = JSON.stringify(productAux); //converter para salvar
    localStorage.setItem('@fashionista/product', productString);

  }, []);

  return (
    <div className="app__container">
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
              {<SizeButton size="PP" />}
            </div>
          </div>

          <div className="product__details__actions">
            <button className="product__details__addToCart">
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>
      <Drawer counter={testCounter} />
    </div>
  )
}
export default ProductDetails;

