import React from 'react'
import styled from 'styled-components'
import { FaMobileAlt } from 'react-icons/fa'
import Ruler from '../asset/repair-lines-3.svg'


export default function RulerRepair({ title }) {
    return (
        <Wrapper >
            <div className='ruler-container'>
                <div className="content-ruler">
                    <h2>{title}</h2>
                    <p>Leave your mobile phone number and we will call you back</p>
                </div>
                <form className='form-ctrl'>
                    <p><span><FaMobileAlt /></span> Your phone number</p>
                    <div>
                        <input
                            type='tel'
                            maxLength="10"
                            placeholder='0963 6303 68' name='phone' />
                        <button type='submit' className='btn call-btn'>call me back</button>
                    </div>
                </form>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    background-color: var(--primary-clr);
    background-image: url(${Ruler});
    background-position: bottom center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    width: 100%;
    .ruler-container{
        width: 100%;
        max-width: 1170px;
        display: flex;
        flex-direction: column;
        padding: 2rem 1rem;
        button{
            margin: 0;
        }
        .content-ruler{
            display: block;
            position: relative;
            margin-bottom: 2rem;
            h2{
                font-size: 28px;
                color: var(--text-clr);
                font-weight: 500;
                margin-bottom: 1rem;
            }
            p{
                font-size: 16px;
                font-weight: 300;
                color: var(--secound-text-clr)
            }
        }
        .form-ctrl{
            width: 100%;  
            display: block;
            position: relative;
            p{
                font-size: 16px;
                color: var(--secound-text-clr);
                display: flex;
                align-items: center;
                justify-content: flex-start;
                margin-bottom: 1rem;
                span{
                    color: var(--text-clr);
                    margin-right: 0.5rem;
                }
            }
            div{
                display: flex;
                align-items: center;
                .call-btn{
                    background-color: var(--text-clr);
                    color: var(--primary-clr);
                    transition: ease 0.3s;
                    &:hover{
                    background-color: var(--placeholder-clr);
                    color: var(--text-clr);
                    }
                }
                input{
                    width: 100%;
                    height: 47px;
                    padding: 0.5rem 1rem;
                    border: none;
                    margin-right: 1rem;
                    &::placeholder{
                        color: var(--placeholder-clr);
                    }
                }
            }
        }
        @media (min-width: 990px){
            display: grid;
            grid-template-columns: 3fr 2fr;
            grid-gap: 1rem;
            width: 100%;
            .content-ruler{
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: 100%;
                h2{
                    font-size: 42px;
                }
            }
            .form-ctrl{
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: 100%;
            }
        }
    } 
`