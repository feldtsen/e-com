import './navigation-bar.styles.scss'
import { withRouter } from 'react-router-dom';

const NavigationBar = ({ history }) => {
    return (
        <nav className="navigation-bar">
            <div className="navigation-bar__left">
                <button className="navigation-bar__left--logo" onClick={() => {
                    history.push('/')
                }}>feldtsen</button>
            </div>

            <div className="navigation-bar__right">
                <button className="navigation-bar__right--cart">cart(0)</button>
                <button className="navigation-bar__right--sign-in">sign in</button>
                <button className="navigation-bar__right--sign-up">sign up</button>
            </div>
        </nav>
    )
}

export default withRouter(NavigationBar);