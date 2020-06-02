import React from "react";
import { Link } from "react-router-dom";
import './Product.css';

const Product = () => {
	return (
		<div className="product__card">
			<Link to="/">
				<figure className="product__image">
					<img src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912" alt="Produto VESTIDO TRANSPASSE BOW" title="VESTIDO TRANSPASSE BOW" />
				</figure>
				
				<h3 className="product__name">VESTIDO TRANSPASSE BOW</h3>
				<div className="product__price">
					<span className="product__price product__price--to">R$ 199,90</span>
				</div>

			</Link>
		</div>
	);
};

export default Product;

