import React from 'react';
import { Switch, Route } from "react-router-dom";
import { HomePage, LoginPage, WishList } from '../pages';

const Routes = (props) => (
    <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/" component={HomePage} />
        <Route exact path='/wish-list' component={WishList} />
    </Switch>
)

export default Routes;