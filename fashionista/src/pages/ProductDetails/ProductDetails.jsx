import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { closeDrawerAction } from "../../store/actions/drawerActions";

import SizeButton from "../../components/SizeButton/SizeButton";

import './ProductDetails.css';


const ProductDetails = () => {

  const { products } = useSelector(store => store.productsReducer);
  const dispatch = useDispatch();

  const [product, setProduct] = useState({});

  const { code_color } = useParams();

  useEffect(() => {
    // Fechar o drawer antes de tudo
    dispatch(closeDrawerAction); 

    if (products.length === 0 || product === null) {
      var productJSON = localStorage.getItem('@fashionista/product');
      setProduct(JSON.parse(productJSON)); // convertendo para JSON
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
    </div>
  )
}
export default ProductDetails;

