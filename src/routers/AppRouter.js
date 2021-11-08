import React, { useContext } from 'react'
import { BrowserRouter as Router,Switch } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/LoginScreen/LoginScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {

    const {user:{logged}} = useContext(AuthContext)

    return (
    <Router>
        <div>
            <Switch>
                <PublicRoute 
                    exact path="/login" 
                    isAuthenticated={logged}
                    component={ LoginScreen }/>
                <PrivateRoute 
                    isAuthenticated={logged}
                    path="/" 
                    component={ DashboardRoutes }/>
            </Switch>
        </div>
    </Router>
    )
}
