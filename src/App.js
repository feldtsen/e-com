import {useEffect} from 'react';
import './App.scss';

import { connect } from "react-redux";

import {Switch, Route, useLocation, useHistory, Redirect} from 'react-router-dom';

import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selectors";

import LandingPage from "./page/landing-page/landing-page.component";
import ShopPage from "./page/shop/shop.component";
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
    {size: 20, top: 2, right: 2, color: "#820829", index: 1},
    {size: 20, top: .5, right: 8, color: "#9e0131", index: 2},
    {size: 15, top: 0, right: 2, color: "#d0114d", index: 3},
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
    }, [setCurrentUser])

    /*
    const [scrollY, setScrollY] = useState(0);

    const updateYPos = () => {
        setScrollY(window.pageYOffset);
    }

    useEffect(() => {
        const  watchScroll = () => {
            window.addEventListener("scroll", updateYPos);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", updateYPos);
        };
    });

     */

  return (
    <>
        <div className="cover">
            <img
                alt="cover "
                className={`cover--image ${location.pathname === "/" ? "cover--image--visible" : ''}`}
                src="https://images.unsplash.com/photo-1531375128131-e56e112aa47f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2090&q=80"
            />
        </div>

        <NavigationBar />
        <GeometryContainer>
            {
                circleStyles.map((circleStyle, index) => (
                    <CircleGeometry key={`circleStyle${index}`} circleStyle={circleStyle} />
                ))
            }
        </GeometryContainer>

        <Switch location={background || location}>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route path="/shop" component={ShopPage}/>
        </Switch>

        {currentUser ?
            <Redirect to="/shop" />
            :
            background &&
            <Route path={location.pathname === "/sign-in" ? "/sign-in" : "/sign-up"} children={
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
