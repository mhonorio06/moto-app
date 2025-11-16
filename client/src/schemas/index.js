import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
    first_name : yup.string().required("First name is required"),
    last_name : yup.string().required("Last name is required"),
    password : yup
    .string()
    .min(5).matches(passwordRules, {message: "Please create a stronger password!"})
    .required("Password is required"),
    // confirmPassword : yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Required"),
    dob : yup.date().required("Date of birth is required"),
    address : yup.string().required("Address is required"),
    city : yup.string().required("City name is required"),
    state : yup.string().required("State is required"),
    zipcode : yup.number().positive().integer().required("Must be a valid zipcode")
});