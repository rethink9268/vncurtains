import React from 'react'
import styled from 'styled-components'
import RulerRepair from './RulerRepair.js'
import { useDesignsContext } from '../contexts/designs_context.js'
import { Link } from 'react-router-dom'
import { mediaUrl } from '../asset/urls.js'
import { FaLocationArrow } from 'react-icons/fa'

export default function Footer() {
    const { designsData } = useDesignsContext()
    const url = mediaUrl(designsData.darkThemeLogo.image.data.attributes.url);

    return (
        <Wrapper>
            <div className="vncurtains-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.80009064451258!2d106.5801476823312!3d10.978354183882582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d3e658217fa9%3A0xb937c941d750c2ba!2zUsOobSBD4butYSBD4bunIENoaQ!5e0!3m2!1sen!2s!4v1674972922913!5m2!1sen!2s" />
            </div>
            <div className="footer">
                <RulerRepair title='You Still Have a Question?' />
                <div className='copyright'>
                    <div className='container'>
                        <Link to='/' className='logo'>
                            <img src={url} alt="logo" />
                        </Link>
                        <div className="content">
                            <div>
                                <span><FaLocationArrow /></span>
                                <span>CN1: 11B - TL15 - Tân Thạnh Đông - Củ Chi - HCM</span>
                            </div>
                            <div>
                                <span><FaLocationArrow /></span>
                                <span>CN2: 89 - Dương Đình Hội - TP Thủ Đức - HCM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    margin-top: 2rem;
    .vncurtains-map{
        position: relative;
        iframe{
        width: 100%;
        height: 40vh;
        border: none;
        }
    }
    .copyright{
        display: flex;
        justify-content:center;
        align-items: center;
        background-color: #101010;
        width: 100%;
    }
    .container{
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 1rem;
        width: 100%;
        .logo{
            margin-bottom: 1rem;
        }
        .content{
            div{
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                padding: 0.5rem;
                span{
                    color: var(--secound-text-clr);
                    &:last-child{
                    margin-left: 2rem;
                    }
                }
            }

        }
        @media (min-width: 765px){
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            max-width: 1170px;
            .logo{
                margin: 0;
            }
        }
    }
`