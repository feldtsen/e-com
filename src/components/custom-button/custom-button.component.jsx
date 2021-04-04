import "./custom-button.styles.scss";

const CustomButton = ({children, additionalClasses, ...otherProps}) => (
   <button className={`custom-button ${additionalClasses}`} {...otherProps}>
      {children}
   </button>
)

export default CustomButton;