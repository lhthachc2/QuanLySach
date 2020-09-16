import React from "react"
import ReactDOM from "react-dom"
import {Router, Switch, Route} from "react-router-dom"
import {Provider} from "react-redux"
import {message} from "antd"
import App from "./containers/App"
import { NotificationContainer } from 'react-notifications';
import configureStore, {history} from "./base/redux/store"
import SignIn from './routes/Account/SignIn';
import AuthRoute from './base/helper/AuthorizedRoute';
import UnauthorizedRoute from './base/helper/UnauthorizedRoute';

message.config({
    top: 100,
    maxCount: 1,
    duration: 2
})

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <Router history={history} >
            <Switch>
                <UnauthorizedRoute exact path="/sign-in" component={SignIn}/>
                <AuthRoute path="/" component={App} />
            </Switch>
            <NotificationContainer />
        </Router>
    </Provider>,
    document.getElementById("root")
)
