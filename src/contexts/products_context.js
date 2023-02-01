import axiosClient from '../api/axiosClient.js'
import React, { useContext, useEffect, useReducer, useState } from 'react'
import { productsURL } from '../asset/urls.js'
import reducer from '../reducers/products_reducer.js'
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
import { Slugify } from '../components/Slugify.js'



const initialState = {
    productsLoading: true,
    productsData: [],
    productsError: false,
    singleProductLoading: false,
    singleProduct: [],
    singleProductError: false,
    grid_view: true,
    search_term: '',
    sort_query: {
        field: 'name',
        isDesc: false
    }
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    async function getProductsData() {
        try {
            dispatch({ type: LOADING_PRODUCTS })
            const Products = await axiosClient.get(productsURL, {
                params: {
                    filters: {
                        slug: {
                            $contains: Slugify(state.search_term)
                        }
                    },
                    sort: `${state.sort_query.field}${state.sort_query.isDesc ? ':desc' : ''}`,
                    populate: 'deep'
                }
            })
            dispatch({ type: GET_PRODUCTS_SUCCESS, payload: Products.data })

        } catch (error) {
            dispatch({ type: GET_PRODUCTS_ERROR })
            console.log(error)
        }
    }

    async function getSingleProduct(Params) {
        try {
            dispatch({ type: LOADING_SINGLE_PRODUCT })
            const Product = await axiosClient.get(productsURL, {
                params: Params
            })
            dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: Product.data[0].attributes })

        } catch (error) {
            dispatch({ type: GET_SINGLE_PRODUCT_ERROR })
            console.log(error)
        }
    }

    function setGridView(value) {
        dispatch({ type: SET_GRID_VIEW, payload: value })
    }

    function updateSearchQuery(e) {
        dispatch({ type: FILTERS_PRODUCTS, payload: e.target.value })
    }
    function updateSortQuery(e) {
        const value = e.target.value
        if (value === 'name-z') {
            dispatch({ type: SORT_PRODUCTS, payload: { key: 'name', isDesc: true } })
        }
        if (value === 'name-a') {
            dispatch({ type: SORT_PRODUCTS, payload: { key: 'name', isDesc: false } })
        }
        if (value === 'price-lowest') {
            dispatch({ type: SORT_PRODUCTS, payload: { key: 'price', isDesc: false } })
        }
        if (value === 'price-highest') {
            dispatch({ type: SORT_PRODUCTS, payload: { key: 'price', isDesc: true } })
        }
    }

    useEffect(() => {
        getProductsData()
    }, [state.sort_query])

    useEffect(() => {
        getProductsData()
    }, [])

    return (
        <ProductsContext.Provider value={{
            ...state,
            getSingleProduct,
            setGridView,
            updateSearchQuery,
            updateSortQuery,
            getProductsData
        }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => {
    return useContext(ProductsContext)
}