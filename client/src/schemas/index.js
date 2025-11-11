import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
    first_name : yup.string().required("Required"),
    last_name : yup.string().last_name.required("Required"),
    // password : yup.string.min(5).matches(passwordRules, {message: "Please create a stronger password!"}).required("Required"),
    // // confirmPassword : yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Required"),
    // dob : yup.date().dob.required("Required"),
    // address : yup.string().address.required("Required"),
    // city : yup.string().city.required("Required"),
    // state : yup.string().state.required("Required"),
    // zipcode : yup.number().positive().integer().required("Must enter zipcode").max(5),
});