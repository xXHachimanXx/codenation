const BASE_URL = "https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog/";

export async function getCatalog() {
    const res = await fetch(BASE_URL);
    const catalog = await res.json();

    return catalog;
}