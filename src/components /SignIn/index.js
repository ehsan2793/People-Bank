import React,{useState,useEffect} from 'react';
import SignInSchema from '../../Schema/SignInSchema'
import * as yup from 'yup';
import axios from "axios";

import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    Text,
    FormButton,Errors,ErrorsP
} from './SignInElements'

const SingIn = () => {
    const[post, setPost] = useState()
    const [inputs, setInputs] = useState({

        email:"",
        password:""

    })
    const [errors,setErrors] = useState({
        email:"",
        password:""
    })

    const [disabled,setDisabled] = useState(true)

const validation=(name,value) => {
        yup.reach(SignInSchema,name).validate(value).then(vaid => {
           setErrors({...errors,[name]:''})
            console.log('valid')
        }).catch(err => {
            setErrors({...errors,[name]:err.errors[0]
            })
            console.log(errors)
        })
    }
const change =( event) => {
    const {name,value} = event.target
    setInputs({...inputs,[name]:value})
    validation(name,value)


}

const submit = (event) => {
  event.preventDefault()
    axios.post('https://',inputs).then(response => {
        setPost("account has been created")
    }).catch(err => {
        setPost("something went wrong please try again")
    })
    setInputs({ email:"", password:""})
}

    useEffect(()=>{
        SignInSchema.isValid(inputs).then(vaid => {
            setDisabled(!vaid)
        })
    },[inputs])



    return (

            <Container>
                <FormWrap>
                    <Icon to={'/'}> People Bank </Icon>
                    <FormContent>
                        <Form onSubmit={submit}>
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor="email" >Email</FormLabel>
                            <FormInput id={'email'} type="email" name="email" placeholder="Enter your email" value={inputs.email} onChange={change}/>
                            {errors.email.length > 0 ? <Errors>{errors.email}</Errors>:null}
                            <FormLabel htmlFor="password" >Password</FormLabel>
                            <FormInput id={'password'} type="password" name="password" placeholder="Enter your password" value={inputs.password} onChange={change}/>

                            {errors.password.length > 0 ? <Errors>{errors.password}</Errors>:null}

                            <FormButton disabled={disabled} type="submit">Continue</FormButton>
                            <ErrorsP>{post}</ErrorsP>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>

    )
}

export default SingIn