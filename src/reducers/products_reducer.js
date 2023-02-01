import {
    LOADING_PRODUCTS,
    GET_PRODUCTS_ERROR,
    GET_PRODUCTS_SUCCESS,
    LOADING_SINGLE_PRODUCT,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_ERROR,
    SET_GRID_VIEW,
    FILTERS_PRODUCTS,
    SORT_PRODUCTS
} from '../asset/action.js'

const products_reducer = (state, action) => {
    if (action.type === LOADING_PRODUCTS) {
        return ({ ...state, productsLoading: true })
    }
    if (action.type === GET_PRODUCTS_SUCCESS) {
        return ({ ...state, productsData: action.payload, productsLoading: false })
    }
    if (action.type === GET_PRODUCTS_ERROR) {
        return ({ ...state, productsError: true, productsLoading: false })
    }
    if (action.type === LOADING_SINGLE_PRODUCT) {
        return ({ ...state, singleProductLoading: true })
    }
    if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
        return ({ ...state, singleProduct: action.payload, singleProductLoading: false })
    }
    if (action.type === GET_SINGLE_PRODUCT_ERROR) {
        return ({ ...state, singleProductError: true, singleProductLoading: false })
    }
    if (action.type === SET_GRID_VIEW) {
        return ({ ...state, grid_view: action.payload })
    }
    if (action.type === FILTERS_PRODUCTS) {
        return ({ ...state, search_term: action.payload })
    }
    if (action.type === SORT_PRODUCTS) {
        return ({ ...state, sort_query: { field: action.payload.key, isDesc: action.payload.isDesc } })
    }
    throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer