import React from 'react'
import styled from 'styled-components'
import { useDesignsContext } from '../../contexts/designs_context.js'
import ReactMarkdown from 'react-markdown'
import Check from '../../asset/repair-check.svg'
import PortfolioSlider from '../../components/PortfolioSlider.js'
import { Link } from 'react-router-dom'

export default function ServiceBanner2() {
    const { designsData } = useDesignsContext()
    const Banner = designsData.banner?.find(item => item.name === 'service-2')

    return (
        <div className='lines'>
            <Wrapper className='section section-center'>
                <article className="slider_container">
                    <PortfolioSlider />
                </article>
                <article className="content">
                    <h5>{Banner.subtitle}</h5>
                    <h1>{Banner.title}</h1>
                    <div>
                        <ReactMarkdown>{Banner.content}</ReactMarkdown>
                    </div>
                    <ul className='checks'>
                        {Banner.info.map((item) => {
                            return (
                                <li key={item.id}>
                                    <img src={Check} alt="check" />
                                    <span>{item.plusName}</span>
                                </li>
                            )
                        })}
                    </ul>
                    <Link to='/products' className='btn'>Explore Products</Link>
                </article>
            </Wrapper>
        </div>

    )
}

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    .slider_container{
        padding: 1rem;
    }    
    .content{
        display: flex;
        flex-direction: column;
        padding: 1rem;
        position: relative;
        width: 100%;
        .checks{
            display: flex;
            flex-direction: column;
            margin-bottom: 1rem;
            li{
                img{
                    width: 100%;
                    max-width: 40px;
                }
                color: var(--dark-text-clr);
                display: grid;
                grid-template-columns: auto 1fr;
                grid-gap: 1rem;
                align-items: center;
                margin-bottom: 0.5rem;
                span{
                    line-height: 24px;
                    font-weight: 400;
                }
            }
        }
        div{
            margin-bottom: 1rem;
            padding-right: 1rem;
        }
    }
    @media (min-width: 765px){
        position: relative;
        display: grid;
        width: 100%;
        grid-template-columns: 1fr 1fr;
        place-items: center;
        .content{
            padding-left: 2rem;
            order: 1;
            .checks{
                display: grid;
                grid-template-columns: repeat(2,1fr);
            }
        }
        .slider_container{
            padding: 3rem;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            overflow: hidden;
            order: 2;
        }
    }

`
