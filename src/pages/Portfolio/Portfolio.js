import React from 'react'
import styled from 'styled-components'
import PageHero from '../../components/PageHero.js'

export default function Portfolio() {
    return (
        <Wrapper className='section'>
            <PageHero title='portfolio' isPortfolio={true} />
        </Wrapper>
    )
}
const Wrapper = styled.div`
    


`