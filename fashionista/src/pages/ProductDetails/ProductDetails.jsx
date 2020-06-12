import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import { closeDrawerAction } from "../../store/actions/drawerActions";
import { getProducts } from "../../store/actions/productsActions";
import { addProductToCart } from "../../store/actions/cartActions";
import { setProductToBuy, setSizeProductToBuy } from "../../store/actions/productActions";

import './ProductDetails.css';

const ProductDetails = () => {

  const { products } = useSelector(store => store.productsReducer);
  const productDetails = useSelector(state => state.productReducer);

  const dispatch = useDispatch();
  const { code_color } = useParams();

  const product = productDetails.product_info === null ?
    getProductFromLocalStorage() :
    productDetails.product_info;

  const productSize = product === null ? 'U' : product.size;


  useEffect(() => {

    async function init() {
      // Fechar o drawer antes de tudo
      if (products.length === 0 || product === null) {
        var productJSON = localStorage.getItem('@fashionista/product');

        // Se a store estiver vazia, faça uma nova requisição
        if (productJSON === null) getProducts(dispatch);

        dispatch(setProductToBuy(JSON.parse(productJSON))); // convertendo para JSON
        return;
      }
      let productAux = products.find((product) => product.code_color === code_color);

      dispatch(setProductToBuy(productAux));
      var productString = JSON.stringify(productAux); //converter para salvar
      localStorage.setItem('@fashionista/product', productString);

    }
    init();
  }, []);

  async function getProductFromLocalStorage() {
    var productJSON = localStorage.getItem('@fashionista/product');

    if (productJSON === null) {

      await getProducts(dispatch);

      productJSON = await products.find((p) => p.code_color === code_color);

      var productString = JSON.stringify(productJSON); //converter para salvar
      localStorage.setItem('@fashionista/product', productString); // armazenar
    }

    return productJSON;
  }


  async function handleAddProductToCart() {

    // adicionar novo campo 'size'
    console.log(product)
    await dispatch(setProductToBuy(product));
    await dispatch(addProductToCart(product));
  }


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
            <p>Escolha o tamanho:</p>
            <div className="product__details__btnGroup">
              {
                product.sizes &&
                product.sizes.map((s, index) =>
                  <button
                    key={index}
                    onClick={() => dispatch(setSizeProductToBuy(s.size))}
                    className={`${productSize === s.size ? 'onClick' : 'sizeButton'}`}
                  >
                    {s.size}
                  </button>
                )
              }
            </div>
          </div>

          <div className="product__details__actions">
            <button className="product__details__addToCart" onClick={() => handleAddProductToCart()}>
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductDetails;

