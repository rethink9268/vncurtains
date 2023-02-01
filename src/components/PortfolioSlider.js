import React from 'react'
import { usePortfolioContext } from '../contexts/portfolio_context.js'
import styled from 'styled-components'
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { mediaUrl } from '../asset/urls.js'


export default function PortfolioSlider() {
    const { portfolios } = usePortfolioContext()
    const sliders = portfolios.slice(0, 10)

    return (
        <SliderContainer>
            <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 2000 }}
                speed={800}
                navigation
                pagination={{ clickable: true }}
            >
                {sliders.map(item => {
                    const { title, subtitle, thumb } = item.attributes
                    const url = mediaUrl(thumb.data.attributes.url)
                    return (
                        <SwiperSlide key={item.id}>
                            <div className='card'>
                                <img src={url} alt={title} />
                                <div className="card-content">
                                    <h5>{subtitle}</h5>
                                    <h2>{title}</h2>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </SliderContainer>
    )
}

const SliderContainer = styled.div`
    width: 100%;
    .card{
        img{
            position: relative;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        cursor: pointer;
        .card-content{
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(0,0,0, 0.4);
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        transition: ease 0.3s;
        opacity: 0;
        &:hover{
                opacity: 1;
            }
            h5{
                font-size: 0.8rem;
                font-weight: 400;
                color: var(--secound-text-clr);
                margin-bottom: 1rem;
            }
            h2{
                font-size: 2rem;
                color: var(--text-clr);
                font-weight: 500;
            }
        }
    }
`
