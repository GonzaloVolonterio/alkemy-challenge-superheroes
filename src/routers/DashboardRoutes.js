import React from "react";
import { Redirect, Route, Switch } from "react-router";

import { HeroDetail } from "../components/Heroes/HeroDetail";
import { HomeScreen } from "../components/HomeScreen/HomeScreen";
import { Navbar } from "../components/NavBar/Navbar";
import { SearchScreen } from "../components/Search/SearchScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='mt-4 m-height'>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/search' component={SearchScreen} />
          <Route exact path='/hero-detail/:heroId' component={HeroDetail} />
          <Redirect to='/' />
        </Switch>
      </div>
    </>
  );
};
