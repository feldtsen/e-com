import './circle-geometry.styles.scss'
import {useLocation} from 'react-router-dom';

const CircleGeometry = ({ circleStyle, address }) => {
    const location = useLocation();
    console.log(location.pathname);

    return (
        <div className="circle-geometry" style={{
            width: `${circleStyle.size}rem`,
            height: `${circleStyle.size}rem`,
            bottom: `${location.pathname !== '/' ? -40 : circleStyle.top - (circleStyle.size / 2)}rem`,
            right: `${location.pathname !== '/' ? -40 : circleStyle.right - (circleStyle.size / 2)}rem`,
            backgroundColor: `${circleStyle.color}`,
            zIndex: `${circleStyle.index}`
        }}/>
    )
}

export default CircleGeometry;