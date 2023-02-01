import React from 'react'
import styled from 'styled-components'
import PageHero from '../../components/PageHero.js'
import Filter from './Filter.js'
import ProductList from './ProductList.js'

export default function Products() {

    return (
        <main className='section'>
            <PageHero title='products' isProducts={true} />
            <Wrapper className='section-center section-products'>
                <Filter />
                <ProductList />
            </Wrapper>
        </main>
    )
}
const Wrapper = styled.div`
    padding: 1rem;
    @media (min-width: 765px){
        padding: 0;
    }
`
