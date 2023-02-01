import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import styled from 'styled-components'

export default function CallMeBack() {
    return (
        <Wrapper>
            <FaPhoneAlt className='icon' />
            <p>0963 6303 68<br />0917 4030 23</p>
            <button className='btn' type='button'>Call Me Back</button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: none;
    p{
        margin-right: 1rem;
        margin-bottom: 0;
        color: var(--nav-clr);
        font-size: 1rem;
        font-weight: 400;
        white-space: nowrap;
    }
    .icon{
        font-size: 2rem;
        color: var(--primary-clr);
        margin-right: 1rem;
    }
    button{
        margin: 0;
    }
    @media (min-width: 990px){
        display: flex;
        flex-direction: row;
        justify-items: center;
        align-items: center;
    }
`