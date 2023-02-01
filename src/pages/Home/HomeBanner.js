import React from 'react'
import { useDesignsContext } from '../../contexts/designs_context.js'
import styled from 'styled-components'
import { mediaUrl } from '../../asset/urls.js'
import HomeSvg from '../../asset/repair-infobox-element.svg'
import BackgroundRepair from "../../asset/repair-pic-bg.jpg"
import RulerRepair from '../../components/RulerRepair.js'

export default function HomeBanner() {
    const { designsData } = useDesignsContext()
    const HomeBanner = designsData.banner.find(item => item.name === 'home')
    const url = mediaUrl(HomeBanner.image.data.attributes.url)

    return (
        <Wrapper className='section-center'>
            <div className='grid-container'>
                <article className='image-container'>
                    <img src={url} alt={HomeBanner.name} />
                </article>
                <article className='content'>
                    <h5>{HomeBanner.subtitle}</h5>
                    <h1>{HomeBanner.title}</h1>
                    <div className="plus">
                        {HomeBanner.info.map(item => {
                            const { id, plusName, plusDesc } = item
                            return (
                                <div key={id} className='plus-container'>
                                    <img src={HomeSvg} alt="svg" />
                                    <div className="content-plus">
                                        <h2>{plusName}</h2>
                                        <p>{plusDesc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </article>
            </div>
            <RulerRepair title='Free evaluation of your project' />
        </Wrapper>
    )
}
const Wrapper = styled.div`
    margin-top: 6rem;
    height: calc(100vh-6rem);
    .grid-container{
        width:100%;
        display: flex;
        flex-direction: column;
    }
    .image-container {
        padding: 1rem 1rem 0 1rem;
        order: 2;
        display: block;
        position: relative;
        background-image: url(${BackgroundRepair});
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        align-items: flex-end;
        img{
            position: relative;
            width:100%;
            max-width: 420px;
            position: relative;
        }
    }
    .content{
        order: 1;
        position: relative;
        width:100%;
        padding: 2rem 1rem;
    }    
    .plus{
        display: flex;
        flex-direction: column;
    }
    .plus-container{
        position: relative;
        width: 100%;
        margin-bottom: 2rem;
        img{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            max-width: 50px;
            z-index: 1;
        }
    }
    .content-plus{
        width: calc(100% - 1.5rem);
        height: calc(100% - 1.5rem);
        position: relative;
        border: 4px solid #DDDDDD;
        margin: 1.5rem 0 0 1.5rem;
        padding: 3rem 1rem;
        p{
            font-size: 1.5rem;
            color: var(--primary-clr);
        }
    }

    @media (min-width: 765px){
        display:flex;
        flex-direction: column;
        place-items: center;
        .plus{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 2rem;
        }
        .content{
            h1{
                font-size: 3rem;
            }
        }
    }
    @media screen and (min-width: 990px){
        .grid-container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
        place-items: center;
        background-image: url(${BackgroundRepair});
        background-repeat: no-repeat;
        background-size: 50% 100%;
        }
        .image-container{
            background-image: unset;
            background-repeat: unset;
            background-size: unset;
            order: 1
        }
        .content{
            order: 2;
            h1{
                font-size: 92px;
            }
        }
    }
`