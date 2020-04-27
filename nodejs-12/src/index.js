// const productsList = require("./data/products.json");
const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

/**
 * Função que retorna os produtos da base de dados
 * dado um array seus respectivos ids.
 * 
 * @param {Array} ids obrigatório
 * @param {productList} productList obrigatório
 * @returns {Array} array de produtos
 */
function getProductsFromDataBase(ids, productList) {
	var products = [];

	productList.forEach(element => {
		if(ids.includes(element.id)) {
			products.push(element);
		}
	});

	return products;
}

function getPromotion(products) {
	
}

function getShoppingCart(ids, productsList) {
	var products = getProductsFromDataBase(ids, productsList);
	var promotion = getPromotion(products);	

	return {products, };
}

module.exports = {
	getShoppingCart
};