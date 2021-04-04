import './form-input.styles.scss'

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className="form-input">
        <input className='form-input__field' onChange={handleChange} {...otherProps}/>
        {
            label ?
                <label className={`form-input--label ${otherProps.value.length ? 'form-input--label-shrink' : ''}`}>
                    {label}
                </label>
            :
                null
        }
    </div>
)

export default FormInput;