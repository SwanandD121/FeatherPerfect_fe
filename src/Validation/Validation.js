import * as yup from "yup";

export const loginValidation = yup.object().shape({
    username: yup
        .string()
        .required("Username is required"),
    password: yup.string().required("Password is required"),
});

export const registerValidation = yup.object().shape({
    firstname: yup.string().required("First name is required"),
    lastname: yup.string().required("Last name is required"),
    username: yup.string().required("Username is required"),
    password: yup
        .string()
        .min(6, "Password must be at least 6 characters long")
        .required("Password is required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], "Passwords must match")
        .required("Please confirm your password"),
});
