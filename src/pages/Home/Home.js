import React from 'react'
import styled from 'styled-components'
import AdvantagesBanner from './AdvantagesBanner.js'
import HomeBanner from './HomeBanner.js'
import ServiceBanner1 from './ServiceBanner1.js'
import ServiceBanner2 from './ServiceBanner2.js'
import WorkBanner from './WorkBanner.js'

export default function Home() {
    return (
        <Wrapper>
            <HomeBanner />
            <ServiceBanner1 />
            <ServiceBanner2 />
            <AdvantagesBanner />
            <WorkBanner />
        </Wrapper>
    )
}
const Wrapper = styled.div`
    background-color: var(--bg-clr);
`