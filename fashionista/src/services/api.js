const BASE_URL = "https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog/";

export async function getCatalog() {
    return fetch(BASE_URL)
        .then(res => res.json());
}