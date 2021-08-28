import * as yup from 'yup'

const SignInSchema = yup.object().shape({
    email: yup.string().required("Email is required").email("Must be a valid email address"),
    password:yup.string().required("Password is required").min(5,'Password is at least 5 characters')


})


export default SignInSchema