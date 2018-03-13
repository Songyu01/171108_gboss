//入口文件

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import store from './redux/store'
import Login from './containers/login/login'
import Register from './containers/register/register'
import Dashboard from './containers/dashboard/dashboard'



ReactDOM.render((
      <Provider store={store}>

        <BrowserRouter>
          <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route component={Dashboard}/>
          </Switch>
        </BrowserRouter>
      </Provider>
), document.getElementById('root'));
