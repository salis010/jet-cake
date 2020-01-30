import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import styled from '@emotion/styled'
import { H1 } from '../common/h1'
import { Form } from '../common/form'
import { Label } from '../common/label'
import { Input } from '../common/input'
import { baseColor, breakpoint } from '../../theme'
import { logInValidator } from './log-in-validator'

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center; 
`

const Button = styled.input`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 5;
    grid-row-end: 6;
    height: 4.2rem;
    margin-top: 0.8rem;
    font-size: 1.8rem;
    font-weight: 800;
    color: white;
    background-color: ${baseColor};
    border: none;
    border-radius: 9999px;
    outline: none;

    @media only screen and (min-width: ${breakpoint}) {
        margin-bottom: 0px;
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 3;
        grid-row-end: 4;
    }
`

export const LogIn = ({ formData, setFormData }) => {

    const [ logInData, setLogInData ] = useState({ 
        formReviewed: false,
        email: { value: '', isValid: false }, 
        password: { value: '', isValid: false },
     })

     const handleChange = event => {
        setLogInData({...logInData, [event.target.name]: { value: event.target.value,   isValid: false }})
    }

    const handleSubmit = event => {
        event.preventDefault()
        logInValidator(formData, setFormData, logInData, setLogInData)
        return <Redirect to='/' />
    }

    if(formData.formIsValid) {
        return <Redirect to='/' />
    }

    return (
        <Wrapper>
            <H1>Log In</H1>
            <Form onSubmit={handleSubmit} >
                
                <Label name='email' formReviewed={logInData.formReviewed} isValid={logInData.email.isValid} />
                <Input name='email' type='email' value={logInData.email.value} onChange={handleChange} />

                <Label name='Password' formReviewed={logInData.formReviewed} isValid={logInData.password.isValid} />
                <Input name='password' type='text' value={logInData.password.value} onChange={handleChange}  />
                
                <Button type='submit' value='Log In' />

            </Form>
        </Wrapper>
    )
}