import 'normalize.css'
import React from 'react'
import styled from 'styled-components'
import { useUser } from '~context/User/UserContext'
import './bulma.min.css'
import './index.scss'

const LayoutStyles = styled.div`
  /* transition: color 0.2s ease-out, background 0.2s ease-out; */

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

const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'))
const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'))

const App: React.FC = () => {
  const user = useUser()

  const app = user ? <AuthenticatedApp /> : <UnauthenticatedApp />

  return <LayoutStyles>{app}</LayoutStyles>
}

export default App
