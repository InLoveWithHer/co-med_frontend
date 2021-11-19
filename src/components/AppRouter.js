import React, {useContext} from 'react';
import {authRoutes, publicRoutes} from "../routs";
import {HOME_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {Redirect, Route, Switch} from "react-router-dom";



const AppRouter = () => {
    const {user} = useContext(Context)

    return (
        <Switch>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={HOME_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;