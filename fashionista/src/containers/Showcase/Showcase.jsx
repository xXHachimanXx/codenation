import React from 'react';

import Product from '../../components/Product/Product.jsx';

import './Showcase.css';

const Showcase = () => {
	return (
		<section className="showcase">
			<div className="header__title">Numero de produtos</div>
			<div className="app__container">

				<div className="products__grid">
					<Product />
				</div>
			</div>
		</section>
	);
}

export default Showcase;