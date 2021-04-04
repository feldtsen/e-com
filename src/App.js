import React from 'react';
import './App.css';

import {
    Switch,
    Route,
    useLocation,
    useHistory
} from 'react-router-dom';

import LandingPage from "./page/landing-page/landing-page.component";
import Collection from "./page/collection/collection.component";
import SignIn from "./page/sign-in-or-sign-up/sign-in/sign-in.component";
import SignUp from "./page/sign-in-or-sign-up/sign-up/sign-up.component";
import Modal from "./components/modal/modal.component.";

import NavigationBar from "./components/navigation-bar/navigation-bar.component";
import GeometryContainer from "./components/geometry/geometry-container.component";
import CircleGeometry from "./components/geometry/circle-geometry.component";


const circleStyles = [
    {size: 30, top: 2, right: 2, color: "#820829", index: 1},
    {size: 25, top: 1, right: 10, color: "#9e0131", index: 2},
    {size: 20, top: 0, right: 2, color: "#d0114d", index: 3},
];

function App() {
    let location = useLocation();
    let background = location.state && location.state.background;

    let history = useHistory();

    let back = e => {
        e.stopPropagation();
        history.goBack();
    }

  return (
    <>
        <NavigationBar />
        <GeometryContainer>
            {
                circleStyles.map( (circleStyle, index) => (
                    <CircleGeometry key={`circleStyle${index}`} circleStyle={circleStyle} />
                ))
            }
        </GeometryContainer>

        <Switch location={background || location}>
            <Route exact path='/' component={LandingPage}/>
            <Route exact path='/collection' component={Collection}/>
        </Switch>

        {background && <Route path="/sign-in" children={<Modal back={back}><SignIn back={back}/></Modal>} />}
        {background && <Route path="/sign-up" children={<Modal><SignUp/></Modal>} />}
    </>
  );
}

export default App;
