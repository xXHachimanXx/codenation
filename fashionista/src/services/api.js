import {
    connect
} from "react-redux";
import {
    useState
} from 'react';

import {
    fetchProductsPending,
    fetchProductsSuccess,
    fetchProductsError
} from '../store/actions/actions';

const BASE_URL = "https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog/";

export function fetchProducts() {
    return dispatch => {
        dispatch(fetchProductsPending());
        fetch(BASE_URL)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchProductsSuccess(res.products));
                return res.products;
            })
            .catch(error => {
                dispatch(fetchProductsError(error));
            });
    }
}