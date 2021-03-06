import React from "react";
import { Link } from "react-router-dom";

import { DEFAULT_PRODUCT_IMAGE } from "../../utils/constants";
import './Product.css';

import Badge from "../Badge/Badge";


const Product = ({ data }) => {
  return (
    <div className="product__card">
      <Link to={`/produto/${data.code_color}`} >
        <figure className="product__image">
          {data.discount_percentage && <Badge discount={data.discount_percentage} />}
          <img
            src={data.image ? data.image : DEFAULT_PRODUCT_IMAGE}
            alt={data.name}
            title={data.name}
          />
        </figure>

        <h3 className="product__name">{data.name}</h3>
        <div className="product__price">
          <span className="product__price product__price--to">{data.regular_price}</span>
        </div>

      </Link>
    </div>
  );
}
export default Product;

