import React, { useState, useEffect } from 'react';
import Product from '../../components/Product/Product.jsx';

import { getCatalog } from '../../services/api';

import './Showcase.css';

const Showcase = () => {

	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function getUsers() {
			fetch("https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog/")
				.then(res => res.json())
				.then(data => setProducts([...data]))
				.then(console.log(products));
		}

		getUsers()
	}
		, [products]);



	return (
		<section className="showcase">
			<div className="app_container">
				<div className="header__title">Numero de produtos {products.length}</div>
			</div>
			<div className="app__container">
				<div className="products__grid">
					{
						products.length > 0 &&
						products.map((product, index) => (
							<Product key={index} data={product} />
						))
					}
				</div>
			</div>
		</section>
	);
}

export default Showcase;