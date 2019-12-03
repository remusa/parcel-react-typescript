import 'normalize.css'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import './bulma.min.css'
import Footer from './components/Footer'
import Header from './components/Header'
import './index.scss'
import Home from './screens/Home'
import Login from './screens/Login'
import Register from './screens/Register'

interface Props {}

const MainStyles = styled.div`
  grid-area: main;
  height: 100%;
`

const UnauthenticatedApp: React.FC<Props> = () => {
  return (
    <>
      <Header />

      <MainStyles>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route
            path='/'
            render={() => (
              <div>
                <h1 data-testid='not-found'>404 Not Found</h1>
              </div>
            )}
          />
        </Switch>
      </MainStyles>

      <Footer />
    </>
  )
}

export default UnauthenticatedApp
