import React, {useEffect, useState} from 'react';
import axios from 'axios'

import SignUpSchema from '../../Schema/SignUpSchema'
import * as yup from 'yup'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    CheckboxLabel,
    Checkbox,
    FormButton,
    Errors,
    ErrorsP
} from './SignUpElements'


const SingUp = () => {
    const [disabled, setDisabled] = useState(true)

    const[post, setPost] = useState()

    const [inputs, setInputs] = useState({
        name: '',
        lastName: '',
        email: "",
        password: "",
        term: ''

    })

    const [errors, setErrors] = useState({
        name: '',
        lastName: '',
        email: "",
        password: "",
        term: ''

    })


    const validation = (name, value) => {
        yup.reach(SignUpSchema,name).validate(value).then(valid => {
            setErrors({...errors,[name]:''})
        }).catch(error => {
            setErrors({...errors,[name]:error.errors[0]})
        })
    }

    const change = (event) => {
        event.persist()
        const {name, value, type, checked} = event.target
        const newValue = type === 'checkbox' ? checked : value
        validation(name,newValue)
        setInputs({...inputs, [name]: newValue}

        )


    }
    const submit = (event) => {
        event.preventDefault()
        axios.post('https://',inputs).then(response => {
            setPost("account has been created")
        }).catch(err => {
            setPost("An error occurred we are working to solve the issue")
        })
        setInputs({name: '', lastName: '', email: "", password: "", term: false})

    }

    useEffect(()=> {
        SignUpSchema.isValid(inputs).then(valid => {

            setDisabled(!valid)

        })
    },[inputs])
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to={'/'}> People Bank </Icon>
                    <FormContent>
                        <Form onSubmit={submit}>
                            <FormH1>Create Account</FormH1>
                            <FormLabel htmlFor="name">Name</FormLabel>
                            <FormInput value={inputs.name} onChange={change} type="text" name="name" id={'name'}
                                       placeholder="Enter your name"/>
                            {errors.name.length > 0 ? <Errors>{errors.name}</Errors>:null}

                            <FormLabel htmlFor="lastName">last Name</FormLabel>

                            <FormInput value={inputs.lastName} onChange={change} type="text" name="lastName"
                                       id={'lastName'} placeholder="Enter your last name"/>
                            {errors.lastName.length > 0 ? <Errors>{errors.lastName}</Errors>:null}

                            <FormLabel htmlFor="email">Email</FormLabel>

                            <FormInput value={inputs.email} id="email" onChange={change} type="email" name="email"
                                       placeholder="Enter your Email"/>

                            {errors.email.length > 0 ? <Errors>{errors.email}</Errors>:null}

                            <FormLabel htmlFor="password">Password</FormLabel>

                            <FormInput value={inputs.password} id="password" onChange={change} type="password"
                                       name="password" placeholder={'Enter Password'}/>
                            {errors.password.length > 0 ? <Errors>{errors.password}</Errors>:null}

                            <CheckboxLabel htmlFor="term">Terms and Conditions </CheckboxLabel>
                            <Checkbox onChange={change} id={'term'} type="checkbox" name="term" checked={inputs.term}/>
                            {errors.term ?<Errors>{errors.term}</Errors>:null }

                            <FormButton disabled={disabled} type="submit">Continue</FormButton>

                            <ErrorsP>{post}</ErrorsP>

                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SingUp