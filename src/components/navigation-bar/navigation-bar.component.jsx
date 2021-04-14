import './navigation-bar.styles.scss'

import { signOut } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {Link, useLocation} from 'react-router-dom';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectCartHidden} from "../../redux/cart/cart.selectors";

const NavigationBar = ({currentUser, hidden}) => {
    let location = useLocation();

    return (
        <nav className="navigation-bar">
            <div className="navigation-bar__left">
                <button className="navigation-bar__left--logo">
                    <Link to="/">
                        feldtsen
                    </Link>
                </button>
            </div>

            <div className="navigation-bar__right">
                <button className="navigation-bar__right--cart"><Link to="/collection">shop</Link></button>
                <button className="navigation-bar__right--cart"><CartIcon /></button>
                {
                    hidden ?
                        null
                        :
                        <CartDropdown additionalClasses="navigation-bar__cart-dropdown"/>

                }
                {
                    currentUser ?
                        <>
                            <button className="navigation-bar__right--sign-out" onClick={signOut}>
                                sign out
                            </button>
                        </>
                    :
                        <>
                            <button className="navigation-bar__right--sign-in">
                                <Link to={{
                                    pathname: `/sign-in`,
                                    state: {background: location}
                                }}>
                                    sign in
                                </Link>
                            </button>
                            <button className="navigation-bar__right--sign-up">
                            <Link to={{
                                pathname: `/sign-up`,
                                state: {background: location}
                            }}>
                            sign up
                            </Link>
                            </button>
                        </>
                }
            </div>
        </nav>
    )
}
const mapStateToProps =  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(NavigationBar);