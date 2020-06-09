import React, { useEffect } from 'react';
import Product from '../../components/Product/Product';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProductsError, fetchProductsPending, fetchProductsSuccess } from '../../store/actions/actions';

import { fetchProducts } from '../../services/api';

import './Showcase.css';

const Showcase = () => {

	const dispatch = useDispatch();

	const{ products } = useSelector(store => store);

	useEffect(() => {
		async function getProducts() {
			dispatch(fetchProductsPending());
			try {
				const data = await fetchProducts();
				dispatch(fetchProductsSuccess(data));
			}
			catch (err) {
				dispatch(fetchProductsError(err));
			}
		}
		getProducts();			
	}
	, []);

	return (
		<section className="showcase">
			<div className="app__container">
				<div className="header__title">Numero de produtos {products.length}</div>
			</div>
			<div className="app__container">
				<div className="products__grid">
					{
						products.length > 0 &&
						products.map((product, index) => ( <Product key={index} data={product} />))
					}
				</div>
			</div>
		</section>
	);
}

export default Showcase;