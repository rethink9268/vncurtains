import React from 'react'
import PageHero from '../../components/PageHero'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useProductsContext } from '../../contexts/products_context.js'

export default function SingleProduct() {
    const { getSingleProduct } = useProductsContext()
    const { id } = useParams()
    useEffect(() => {
        const param =
        {
            filters: {
                slug: `${id}`
            },
            populate: 'deep'
        }
        getSingleProduct(param)
    }, [])
    const { singleProduct } = useProductsContext()
    console.log(singleProduct)

    return (
        <main className='section'>
            <PageHero title={singleProduct.name} isProducts={true} isSingleProduct={true} />
        </main>
    )
}
