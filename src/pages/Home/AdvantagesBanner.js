import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useDesignsContext } from '../../contexts/designs_context.js'
import HomeSvg from '../../asset/repair-infobox-element.svg'

export default function AdvantagesBanner() {
    const { designsData } = useDesignsContext()
    const Advantages = designsData.banner.find(item => item.name === 'advantages')

    return (
        <Wrapper className='section section-center'>
            <article className='advantages-title'>
                <h5>{Advantages.subtitle}</h5>
                <h1>{Advantages.title}</h1>
                <p>{Advantages.desc}</p>
                <Link className='btn'>view more</Link>
            </article>
            <article className="advantages-content">
                {Advantages.info.map(item => {
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
            </article>
        </Wrapper>
    )
}

const Wrapper = styled.div`
place-items: center;
position: relative;
.advantages-title{
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 2rem 1rem;
        width: 100%;
        max-width: 480px;
}
.advantages-content{
    padding: 1rem;
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
        h2{
            word-break: break-all;
        }
        p{
            color: var(--primary-clr);
        }
    }
} 
@media (min-width: 765px){
    display: flex;
    flex-direction: row;
    .advantages-content{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
        width: 100%;
        min-width: 480px;
        .content-plus{
            padding: 2rem 1rem;
        }
    }
} 
`
