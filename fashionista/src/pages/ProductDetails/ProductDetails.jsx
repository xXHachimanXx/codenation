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
  const product = productDetails.product_info;

  const dispatch = useDispatch();
  const { code_color } = useParams();

  const productSize = product.size || 'U';


  useEffect(() => {

    async function init() {
      // Fechar o drawer antes de tudo
      await dispatch(closeDrawerAction);

      var productJSON = localStorage.getItem('@fashionista/product');

      if (productJSON === null) {
        // Se a store estiver vazia, faça uma nova requisição
        if (products.length === 0) {
          await getProducts(dispatch);
        }

        const productAux = await products.find((p) => p.code_color === code_color);

        await dispatch(setProductToBuy(productAux));

        var productString = JSON.stringify(productAux); //converter para salvar
        console.log("string" + productString);
        localStorage.setItem('@fashionista/product', productString); // armazenar

        return;
      }
      else {
        productJSON = JSON.parse(productJSON); // string to json
        await dispatch(setProductToBuy(productJSON));
      }

      await dispatch(setProductToBuy(productJSON));

    }
    init();
  }, []);

  function handleAddProductToCart() {
    var stringProduct = JSON.stringify(product);

    // remover campo sizes
    stringProduct = stringProduct
      .replace('\s*\"sizes\" *: *(\"(.*?)\"(,|\s|)|\s*\{(.*?)\}(,|\s|))');

    var cartProduct = (JSON.parse(stringProduct));

    // adicionar novo campo 'size'
    cartProduct = { ...cartProduct, size: productSize, quantity: 0 };

    dispatch(addProductToCart(cartProduct));
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

