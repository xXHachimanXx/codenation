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

/**
 * Função que retorna o tipo de promoção que será aplicada
 * dada a lista de produtos com suas categorias.
 * 
 * @param {Array} products obrigatório
 * @returns {String} promoção
 */
function getPromotion(products) {
	let looks = [0, 0, 0, 0]; // Array contador
	let biggest = 0; // Maior dos contadores
	let promotion = 0; // Endereço da promocao

	products.forEach(element => {
		// Escolher contador de look
		switch (element.category) {
			case promotions[0]: // Single Look
				++looks[0]; 
				break;
			case promotions[1]: // Double Look
				++looks[1]; 
				break;
			case promotions[2]: // Triple Look
				++looks[2]; 
				break;
			default: // Full Look
				++looks[3]; 
				break;
		}		
	});

	biggest = looks.reduce(0, (a, b) => { a > b ? a : b}); // pegar maior valor
	promotion = looks.indexOf((element) => element === biggest ); // Pegar endereço do promoção
	
	return promotions[promotion];
}


function getPriceValues(products, promotion) {
	var totalPrice = 0;
	var discountValue = 0;
	var discountPercentage = 0.0;
	var regularPrice = 0;

	products.forEach(product => {
		regularPrice += product.regularPrice;
		discountValue += getPriceWithPromotion(product, promotion);
	});
}

function getShoppingCart(ids, productsList) {
	var products = getProductsFromDataBase(ids, productsList);
	var promotion = getPromotion(products);	
	var priceValues = getPriceValues(products, promotion);
	


	return {products, promotion, };
}

module.exports = {
	getShoppingCart
};