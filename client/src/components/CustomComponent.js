import { useField } from "formik";

function CustomInput({label, ...props}) {

    const [field, meta] = useField(props);

    return (
    <div className="reg-input">
        <label>{label}</label>
        <input {...field} {...props}
        className={meta.touched && meta.error? "input-error" : ""}
        />
        {meta.touched && meta.error && 
        <div className="error-message">{meta.error} </div>}
    </div>
    )
}

export default CustomInput;