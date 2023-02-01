import React from 'react'
import styled from 'styled-components'
import Product from '../../components/Product.js'

export default function GridView({ products }) {
    return (
        <Wrapper>
            {products.map(product => {
                return (
                    <div key={product.id}>
                        <Product {...product.attributes} id={product.id} />
                    </div>
                )
            })}
        </Wrapper>
    )
}
const Wrapper = styled.div`
    position: relative;
    display: grid;
    grid-gap: 2rem;
    @media (min-width: 590px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 990px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1170px){
        grid-template-columns: repeat(4, 1fr);
    }
`