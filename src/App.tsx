import styled from '@emotion/styled'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import './index.scss'
import Home from './screens/Home'
import Login from './screens/Login'
import Register from './screens/Register'

const LayoutStyles = styled.div`
    height: 100vh;
    text-align: center;

    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: auto minmax(auto, 1fr) auto;
    grid-template-areas: 'header header header' '. main .' 'footer footer footer';

    @media all and (max-width: 500px) {
        grid-template-columns: auto minmax(auto, 1fr) auto;
        grid-template-areas:
            'header header header'
            '. main .'
            'footer footer footer';
    }
`

const MainStyles = styled.div`
    grid-area: main;
    height: 100%;
`

const App: React.FC = () => {
    return (
        <Router>
            <LayoutStyles>
                <Header />

                <MainStyles>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/login' exact component={Login} />
                        <Route path='/register' exact component={Register} />
                        <Route path='/' render={() => <div>404</div>} />
                    </Switch>
                </MainStyles>

                <Footer />
            </LayoutStyles>
        </Router>
    )
}

export default App
