import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mediaUrl } from '../asset/urls.js'
import { FaSearch } from 'react-icons/fa'
import { formatPrice } from '../utils/helpers.js'

export default function Product({ name, price, thumb, slug }) {
    const url = mediaUrl(thumb.data.attributes.url)
    return (
        <Wrapper>
            <div className='container'>
                <img src={url} alt={name} />
                <Link to={`/products/${slug}`} className='links'>
                    <FaSearch />
                </Link>
            </div>
            <footer className='content'>
                <h5>{name}</h5>
                <h5>{formatPrice(price)}</h5>
            </footer>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    width: 100%;    
    position: relative;
    .container{
        position: relative;
        background: var(--black-clr);
        transition: ease 0.3s;
        img{
            position: relative;
            display: block;
            width: 100%;
            height: auto;
            object-fit: cover;
            transition: ease 0.3s;
        }
        .links{
            display: flex;
            justify-content: center;
            align-items: center ;
            position: absolute;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            height: 3rem;
            width: 3rem;
            border-radius: 50%;
            background-color: var(--text-clr);
            opacity: 0;
            transition: ease 0.5s;
            cursor: pointer;
            svg{
                font-size: 2rem;
                color: var(--primary-clr)
            }
        }
        &:hover{
            img{
                opacity: 0.5;
            }
            .links{
                opacity: 1;
            }
        }
    }
    .content{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;
        h5{
            margin: 0;
            &:first-child{
                color: var(--dark-text-clr);
            }
        }
    }

`