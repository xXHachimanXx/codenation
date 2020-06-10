const BASE_URL = "https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog/";

export const fetchProducts = async () => {
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        return data;
    } catch (err) {
        throw err;
    }
}