import { useState } from 'react';

import LandingPageHeading from "../../components/landing-page-heading/landing-page-heading.component";

import './landing-page.styles.scss';
import GeometryContainer from "../../components/geometry/geometry-container.component";
import CircleGeometry from "../../components/geometry/circle-geometry.component";


const circleStyles = [
    {size: 30, top: 2, right: 2, color: "#820829"},
    {size: 25, top: 1, right: 10, color: "#9e0131"},
    {size: 20, top: 0, right: 2, color: "#d0114d"},
];

const LandingPageComponent = () => {

    return (
        <div className="landing-page">
            <LandingPageHeading title="Stay stylish while supporting my work" cta="see the collection"/>

            <GeometryContainer>
                {
                    circleStyles.map( (circleStyle, index) => (
                        <CircleGeometry key={`circleStyle${index}`} circleStyle={circleStyle} />
                    ))
                }
            </GeometryContainer>
        </div>
    )
}

export default LandingPageComponent;