import React from 'react'
import styled from 'styled-components'
import { useDesignsContext } from '../../contexts/designs_context.js'
import { mediaUrl } from '../../asset/urls.js'

export default function WorkBanner() {
    const { designsData } = useDesignsContext()
    const Work = designsData.banner.find(item => item.name === 'work')
    return (
        <div className='bg-lighter'>
            <Wrapper className='section section-center section-bg-lighter'>
                <div className="timeline-title">
                    <h5>{Work.subtitle}</h5>
                    <h1>{Work.title}</h1>
                    <p>{Work.desc}</p>
                </div>
                <div className='timeline'>
                    <div className='timeline-line'>
                        <span className="line-dot dot-start"></span>
                        <span className="line-dot dot-end"></span>
                    </div>
                    <div className="work-timeline">
                        {Work.info.map((item, index) => {
                            const url = mediaUrl(item.images.data[0].attributes.url)
                            return (
                                <div key={item.id} className='timeline-status'>
                                    <span className='line-dot status'></span>
                                    <div className={`timeline-content ${index % 2 !== 0 ? 'order' : null}`}>
                                        <h5>0{index + 1}.</h5>
                                        <h2>{item.plusName}</h2>
                                        <p>{item.plusDesc}</p>
                                    </div>
                                    <div className="timeline-image">
                                        <img src={url} alt="" />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}
const Wrapper = styled.div`
    position: relative;

    .line-dot{
        position: absolute;
        width: 8px;
        height: 8px;
        left: calc(50% - 5px);
        border-radius: 50%;
        background: #e1e1e1;
    }
    .timeline-title{
        margin-bottom: 2rem;
        text-align: center;
    }
    .timeline{
        position: relative;
        .timeline-line{
        position: absolute;
        top: 0;
        bottom: 0;
        left: calc(50% - 1px);
        border-width: 2px;
        border-color: #e1e1e1;
        border-left-style: solid;
        .dot-start{
            top: -4px;
        }
        .dot-end{
            bottom: -4px;
        }
        }
        .work-timeline{
            position: relative;
            width: 100%;
            padding: 2rem 0;
            z-index: 9;
            h5{
                font-size: 24px;
                font-weight: 600;
                padding-top: 2rem;
            }
            .timeline-status{
                padding: 2rem 0;
                position: relative;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .timeline-content{
                    text-align: center;
                    width: 100%;
                    max-width: 360px;
                    background-color: var(--text-clr);
                }
            }
            .status{
                top: 0;
                transform: translateX(-50%) !important;
                left: 50% !important;
                background-color: var(--primary-clr);
                margin: -6px 0;
                width: 12px;
                height: 12px;
                border: solid 2px #fff;
            }
            .timeline-image{  
                img{
                    width: 100%;
                    max-width: 500px;
                }
            }
        }
    }
    @media screen and (min-width: 990px) {
        .timeline-status{
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            grid-gap: 6rem;
            .timeline-content{
                padding: 2rem;
                max-width: unset !important;
                text-align: right !important;
            }
            .timeline-content.order{
                order: 1;
                text-align: left !important;
            }
            .timeline-image{
                padding: 2rem;
            }
            .status{
                transform: translateY(-50%) !important;
                top: 50% !important;
            }
        }
    }
`