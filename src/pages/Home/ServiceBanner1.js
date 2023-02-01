import React from 'react'
import styled from 'styled-components'
import { useDesignsContext } from '../../contexts/designs_context.js'
import { mediaUrl } from '../../asset/urls.js'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'


export default function ServiceBanner1() {
    const { designsData } = useDesignsContext()
    const Banner = designsData.banner.find(item => item.name === 'service-1')
    const URL = mediaUrl(Banner.image.data.attributes.url)

    return (
        <Wrapper className='section section-center'>
            <article className='image-container'>
                <img src={URL} alt={Banner.name} />
            </article>
            <article className="content">
                <h5>{Banner.subtitle}</h5>
                <h1>{Banner.title}</h1>
                <div>
                    <ReactMarkdown>{Banner.content}</ReactMarkdown>
                </div>
                <Link className='btn link-btn'>Read more</Link>
            </article>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    place-items: center;
    .image-container{
        padding: 1rem;
        img{
            width:100%;
            max-width: 420px;
            height: auto;
            position: relative;
        }
    }
    .content{
        display: flex;
        flex-direction: column;
        padding: 1rem;
        position: relative;
        width: 100%;
        div{
            color: var(--dark-text-clr);
            font-size: 1rem;
            font-weight: 400;
            word-spacing: 2px;
            line-height: 24px;
            padding-right: 1rem;
        }
    }
    @media (min-width: 765px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        place-items: center;
    }
`