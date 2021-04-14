import { useEffect } from 'react';
import './App.css';

import { connect } from "react-redux";

import {Switch, Route, useLocation, useHistory, Redirect} from 'react-router-dom';

import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selectors";

import LandingPage from "./page/landing-page/landing-page.component";
import Collection from "./page/collection/collection.component";
import SignIn from "./page/sign-in-or-sign-up/sign-in/sign-in.component";
import SignUp from "./page/sign-in-or-sign-up/sign-up/sign-up.component";
import Modal from "./components/modal/modal.component.";
import NavigationBar from "./components/navigation-bar/navigation-bar.component";
import CheckoutPage from "./page/checkout/checkout.component";
import GeometryContainer from "./components/geometry/geometry-container.component";
import CircleGeometry from "./components/geometry/circle-geometry.component";

import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {setCurrentUser} from "./redux/user/user.actions";




const circleStyles = [
    {size: 30, top: 2, right: 2, color: "#820829", index: 1},
    {size: 25, top: 1, right: 10, color: "#9e0131", index: 2},
    {size: 20, top: 0, right: 2, color: "#d0114d", index: 3},
];

const App = ({setCurrentUser, currentUser}) => {
    let location = useLocation();
    let background = location.state && location.state.background;

    let history = useHistory();

    let back = e => {
        e.stopPropagation();
        history.goBack();
    }

    useEffect(() => {
       const unsubscribe = auth.onAuthStateChanged(
           async userAuth => {
               if(userAuth) {
                    const userRef = await createUserProfileDocument(userAuth);

                    userRef.onSnapshot(snapshot => {
                       setCurrentUser({
                         id: snapshot.id,
                         ...snapshot.data()
                       });
                    })
               } else {
                   setCurrentUser(userAuth);
               }
           }
       )

        return () => {
           unsubscribe();
        }
    }, [])


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
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/collection" component={Collection}/>
            <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>

        {currentUser ?
            <Redirect to="/collection" />
            :
            background &&
            <Route exact path={location.pathname === "/sign-in" ? "/sign-in" : "/sign-up"} children={
                <Modal back={back}>
                    {
                        location.pathname === "/sign-in" ?
                            <SignIn back={back}/>
                            :
                            <SignUp back={back} />
                    }
                 </Modal>
        } />}

    </>
  );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
