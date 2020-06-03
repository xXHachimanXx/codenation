import React, { useState, useEffect } from 'react';
import Product from '../../components/Product/Product.jsx';

import { getCatalog } from '../../services/api';

import './Showcase.css';

const Showcase = () => {

	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog/")
			.then(res => res.json())
			.then(data => setProducts([...data]));

	}, [products]);

	return (
		<section className="showcase">
			<div className="app_container">
				<div className="header__title">Numero de produtos {products.length}</div>
			</div>
			<div className="app__container">
				<div className="products__grid">
					<Product data={products[0]} />
					{
						products > 0 &&
						products.map((product) => (
							<Product key={product.id} data={product} />
						))
					}
				</div>
			</div>
		</section>
	);
}

export default Showcase;