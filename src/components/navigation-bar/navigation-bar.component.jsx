import './navigation-bar.styles.scss'
import { Link } from 'react-router-dom';

const NavigationBar = ({ history }) => {
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
                <button className="navigation-bar__right--sign-in"><Link to="/sign-in">sign in</Link></button>
                <button className="navigation-bar__right--sign-up"><Link to="/sign-up">sign up</Link></button>
            </div>
        </nav>
    )
}

export default NavigationBar;