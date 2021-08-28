import * as yup from 'yup';

const SignUpSchema = yup.object().shape({

    name:yup.string().required("Name is required").min(3,"Name must be at least 3 characters long"),
    lastName:yup.string().required("Last name is required").min(3," Last name must be at least 3 characters long"),
    email:yup.string().email().required("Email is required"),
    password:yup.string().required("Password is required").min(5,"Password must be at least 5 characters long"),
    term:yup.boolean().oneOf([true],"please agree with our terms")

})

export default SignUpSchema