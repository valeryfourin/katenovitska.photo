import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {publicRoutes} from '../routes';
import { HOME_ROUTE } from '../utils/consts';
import ScrollToTopOnRedirect from './ScrollToTopOnRedirect';

const AppRouter = () => {
    return (
        <>
        <ScrollToTopOnRedirect />
        <Switch>
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} component={props => <Component {...props} />} exact/>
            )}
            <Redirect to={HOME_ROUTE} />
        </Switch>
        </>
    );
};

export default AppRouter;