const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];
const categorys = ['T-SHIRTS', 'PANTS', 'SHOES', 'BAGS'];

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

	products = productList.filter( element => ids.includes(element.id) );

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
	let promotion = 0; // Endereço da promocao	

	products.forEach(element => {
		// Escolher contador de look
		switch (element.category) {
			case categorys[0]: // Single Look
				++looks[0];
				break;
			case categorys[1]: // Double Look
				++looks[1];
				break;
			case categorys[2]: // Triple Look
				++looks[2];
				break;
			default: // Full Look
				++looks[3];
				break;
		}
	});

	// Verificar looks
	looks.forEach(e => {
		if (e != 0) {
			promotion++;
		}
	});

	return promotions[promotion - 1];
}

/**
 * Função para retornar o preço total com a promoção.
 * 
 * @param {Array} product - Arranjo de produtos
 * @param {String} promotion - Nome da promoção
 */
function getPriceWithPromotion(product, promotion) {

	let proms = product.promotions;
	let price = product.regularPrice; // Se não houver a categoria considera-se o preço regular

	// Busca sequêncial
	for (let x = 0; x < proms.length; x++) // Busca no array de promoções
	{
		let looks = proms[x].looks;
		for (let y = 0; y < looks.length; y++) // Busca no array de looks
		{
			if (looks[y] === promotion) {
				price = proms[x].price; // Salvar preço encontrado
				x = proms.length;
				y = looks.length; // parar busca
			}
		}
	}	

	return price;
}

/**
 * Função para calcular preço total, disconto e valor do desconto.
 * 
 * @param {Array} products - Array de produtos
 * @param {String} promotion - Promoção aplicada à compra
 */
function getPriceValues(products, promotion) {
	let totalPrice = 0.0;
	let discountValue = 0.0;
	let discount = 0.0;
	let regularPrice = 0.0;

	// Calcular preço com e sem desconto
	products.forEach(product => {
		regularPrice += product.regularPrice;
		totalPrice += getPriceWithPromotion(product, promotion);
	});

	discountValue = (regularPrice - totalPrice).toFixed(2);
	discount = `${((discountValue * 100) / regularPrice).toFixed(2)}%`;	
	totalPrice = totalPrice.toFixed(2);

	return {
		totalPrice,
		discountValue,
		discount
	};
}

/**
 * Função para formatar a os produtos de acordo 
 * com a saída desejada.
 * 
 * @param {Array} products - Array de produtos
 */
function getNamesAndCategorys(products) {
	var newArray = [];
	
	products.forEach(p => {
		let {
			name,
			category
		} = p;
		newArray.push({
			name,
			category
		});
	});

	return newArray;
}

function getShoppingCart(ids, productsList) {
	var products = getProductsFromDataBase(ids, productsList);
	var promotion = getPromotion(products);
	var priceValues = getPriceValues(products, promotion);
	products = getNamesAndCategorys(products);

	return {
		products,
		promotion,
		...priceValues
	};
}


module.exports = {
	getShoppingCart
};