import "./form-input.styles.scss"

const FormInput = ({ handleChange, label, ...props }) => (
    <div className="group">
        <input onChange={handleChange} className="form-input" {...props} />
        {label &&
            <label className={`${props.value.length && "shrink"} form-input-label`}>
                {label}
            </label>}
    </div >
)

export default FormInput