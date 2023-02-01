import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Ruler from '../asset/repair-lines-3.svg'

export default function PageHero({ title, isProducts, isSingleProduct, isPortfolio }) {
    return (
        <Wrapper>
            <h1>{title}</h1>
            <h3>
                <span><Link className='link' to='/'>Home</Link> / </span>
                {isProducts ?
                    <>
                        <span><Link className={`link ${!isSingleProduct && 'no-hover'}`} to='/products'>products</Link> </span>
                        {isSingleProduct ?
                            <span> / <span className='last'>{title}</span></span>
                            : null
                        }
                    </>
                    : null
                }
                {isPortfolio ?
                    <span><Link className='link' to='/portfolio'>{title}</Link> </span>
                    : null
                }
            </h3>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    background-color: var(--primary-clr);
    background-image: url(${Ruler});
    background-position: bottom center;
    background-repeat: no-repeat;
    height: 100%;
    min-height: 6rem;
    padding: 1rem;
    text-align: center;
    a{
        text-transform: uppercase;
    }
    h1{
        color: var(--text-clr);
    }
    h3{
        color: var(--secound-text-clr);
        margin-bottom: 1rem;
    }
    .link{
        color: var(--text-clr);
        font-weight: 400;
        font-size: 1rem;
        letter-spacing: 1px;
        transition: all 0.3s;
        &:hover{
            color: #101010
        }
    }
    .link.no-hover{
        cursor: unset !important;
        color: var(--dark-text-clr);
    }
    .last{
        color: var(--dark-text-clr);
        font-weight: 400;
        font-size: 1rem;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
`