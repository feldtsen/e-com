import './cta-button-styles.scss';

import { withRouter } from 'react-router-dom';

const CallToAction = ({cta, linkUrl, history, match}) => (
    <button className="call-to-action" onClick={() =>{
        history.push(`${match.url}${linkUrl}`)
    }}>
        {cta}
    </button>
)

export default withRouter(CallToAction);