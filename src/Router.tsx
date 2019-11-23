import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Main from './components/Main'
import Register from './components/Register'

interface Props {}

const Router: React.FC<Props> = () => (
    <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
    </Switch>
)

export default Router
