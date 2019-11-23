import styled from '@emotion/styled'
import React from 'react'

const MainStyles = styled.section`
    grid-area: main;
`

interface Props {}

const Main: React.FC<Props> = () => (
    <MainStyles className='hero is-primary'>
        <div className='hero-body'>
            <div className='container'>
                <h1 className='title'>React + Parcel Boilerplate</h1>

                <h2 className='subtitle'>
                    A simple boilerplate for React apps
                </h2>
            </div>
        </div>
    </MainStyles>
)

export default Main
