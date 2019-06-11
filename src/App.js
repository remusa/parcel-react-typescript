import React, { Component } from 'react'
import styled from 'styled-components'
import 'normalize.css'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import './index.scss'

const AppStyles = styled.div`
    text-align: center;
    height: 100vh;

    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: auto minmax(auto, 1fr) auto;
    grid-template-areas: 'header header header' '. main .' 'footer footer footer';
`

class App extends Component {
    render() {
        return (
            <AppStyles className='App'>
                <Header />

                <Switch>
                    <Route path='/' exact component={Main} />
                </Switch>

                <Footer />
            </AppStyles>
        )
    }
}

export default App
