import './landing-page-heading.styles.scss'
import CallToAction from "../cta-button/cta-button.component";

const LandingPageHeading = ({ title, cta }) => (
    <div className="landing-page">
       <div className="landing-page__container">
           <h1 className="landing-page__container--title">
               {title}
           </h1>
           <CallToAction cta={cta} linkUrl='collection'/>
       </div>
    </div>
)

export default LandingPageHeading;