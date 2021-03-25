import './circle-geometry.styles.scss'

const CircleGeometry = ({ circleStyle }) => (
   <div className="circle-geometry" style={{
       width: `${circleStyle.size}rem`,
       height: `${circleStyle.size}rem`,
       top: `${circleStyle.top - (circleStyle.size/2)}rem`,
       right: `${circleStyle.right - (circleStyle.size/2)}rem`,
       backgroundColor: `${circleStyle.color}`,
       zIndex: `${circleStyle.index}`
   }}/>
)

export default CircleGeometry;