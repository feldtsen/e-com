import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import LandingPage from "./page/landing-page/landing-page.component";
import Collection from "./page/collection/collection.component";

import NavigationBar from "./components/navigation-bar/navigation-bar.component";

function App() {

  return (
    <>
        <NavigationBar />
        <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route exact path='/collection' component={Collection}/>
        </Switch>
    </>
  );
}

export default App;
