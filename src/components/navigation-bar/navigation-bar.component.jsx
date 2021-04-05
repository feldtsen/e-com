import './navigation-bar.styles.scss'
import { signOut } from "../../firebase/firebase.utils";

import {
    Link,
    useLocation
} from 'react-router-dom';

const NavigationBar = ({user}) => {
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
                {
                    user ?
                        <>
                            <button className="navigation-bar__right--cart"><Link to="/collection">shop</Link></button>
                            <button className="navigation-bar__right--sign-out" onClick={signOut}>
                                sign out
                            </button>
                        </>
                    :
                        <>
                            <button className="navigation-bar__right--cart"><Link to="/collection">shop</Link></button>
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

export default NavigationBar;