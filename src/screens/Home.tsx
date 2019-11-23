import styled from '@emotion/styled'
import React from 'react'

const HomeStyles = styled.section`
    height: 100%;
`

interface Props {}

const Home: React.FC<Props> = () => {
    return (
        <HomeStyles className='hero is-primary'>
            <div className='hero-body'>
                <div className='container'>
                    <h1 className='title'>React + TypeScript + Parcel Boilerplate</h1>

                    <h2 className='subtitle'>A simple boilerplate for React apps</h2>
                </div>
            </div>
        </HomeStyles>
    )
}

export default Home
