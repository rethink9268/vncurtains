import React from 'react'
import { useProductsContext } from '../../contexts/products_context.js'
import ListView from './ListView.js'
import GridView from './GridView.js'

export default function ProductList() {
    const { productsData, grid_view } = useProductsContext()

    if (productsData.length < 1) {
        return <h5 style={{ textTransform: 'none' }}>
            Sorry, no products matched  your search...
        </h5>
    }

    if (grid_view === false) {
        return <ListView products={productsData} />
    }

    return <GridView products={productsData} />
}