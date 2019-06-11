import React from 'react'
import styled from 'styled-components'

const MainStyles = styled.section`
    grid-area: main;
`

const Main = () => (
    <MainStyles className='hero is-primary'>
        <div className='hero-body'>
            <div className='container'>
                <h1 className='title'>Primary title</h1>
                <h2 className='subtitle'>Primary subtitle</h2>
            </div>
        </div>
    </MainStyles>
)

export default Main
