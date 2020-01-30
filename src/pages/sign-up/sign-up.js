import React, { useState } from 'react'
import styled from '@emotion/styled'
import { baseColor, breakpoint } from '../../theme'
import { FileInput } from './file-input'
import { Label } from './label'
import { securityQuestions } from './security-questions'
import { validateForm } from './validate-form'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
`

const H1 = styled.h1`
    color: ${baseColor};
    margin: 1rem 0 0 0;
`

const Form = styled.form`
    display: grid;
    grid-template-columns: 100%;
    grid-row-gap: 1rem;
    grid-column-gap: 0;
    width: 90%;
    margin: 20px 0px;

    @media only screen and (min-width: ${breakpoint}) {
        grid-template-columns: 15rem 35rem;
        grid-row-gap: 2rem;
        max-width: 60rem;
        margin: 40px 0px;
    }
`

const Photo = styled.img`
    display: ${props => props.isVisible ? 'static' : 'none'};
    width: 100%;
    max-width: 400px;
    height: 400px;
    margin-top: 30px;
    border: 1px solid grey;
    object-fit: cover;
`

const Input = styled.input`    
    align-self: center;
    height: 2.4rem;
    margin-bottom: 1rem;
    font-size: 1.4rem;
    text-indent: 1rem;
    border: 3px solid grey;
    border-radius: 0.5rem;
    outline: none;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &[type=number] {
        -moz-appearance:textfield;
    }

    @media only screen and (min-width: ${breakpoint}) {
        margin-bottom: 0;
    }
`

const Select = styled.select`
    align-self: center;
    height: 2.4rem;
    font-size: 1.4rem;
    text-indent: 1rem;
    color: RGB(180, 180, 180);
    border: 3px solid grey;
    border-radius: 0.5rem;
    outline: none;
`

const Option = styled.option`
    color: ${baseColor};
`

const options = securityQuestions.map((item, i) => <Option key={i}>{item.question}</Option>)
options.unshift(<Option key={-1} value='default' disabled hidden>Select a security question...</Option>)

const Button = styled.input`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 21;
    grid-row-end: 22;
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
    grid-row-start: 12;
    grid-row-end: 13;
    }
`


export const SignUp = props => {

    const [ formData, setFormData ] = useState({
        formReviewed: false,
        photo: { value: '', isValid: false },
        phoneNumber: { value: '', isValid: false },
        address: { value: '', isValid: false },
        email: { value: '', isValid: false },
        dateOfBirth: { value: '', isValid: false },
        question1: { value: '', isValid: false },
        answer1: { value: '', isValid: false },
        question2: { value: '', isValid: false },
        answer2: { value: '', isValid: false },
        question3: { value: '', isValid: false },
        answer3: { value: '', isValid: false },
    })

    // removes the date placeholder 'DD/MM/YYYY' from the Date field
    const [ dateType, setDateType ] = useState('text')
    const onDateFocus = () => setDateType('date')
    const onDateBlur = () => setDateType('text')

    const handleChange = event => {
        setFormData({...formData, [event.target.name]: { value: event.target.value, isValid: false }})
    }

    const handleFileChange = event => {
        const file = event.target.files[0]
      
        setFormData({...formData, [event.target.name]: { value: file, isValid: false } })
    }

    const handleSubmit = event => {
        
        event.preventDefault()        

        if(validateForm(formData, setFormData)) {
            // submit data to server
            // redirect to homepage
        } else {
            // validateForm will return a new State object which will automatically show the failing fields
        }
    }

    
    return (
        <Wrapper>
            <H1>Sign Up</H1>
            <Photo src={formData.photo.value && URL.createObjectURL(formData.photo.value)} isVisible={formData.photo.value} />
            <Form onSubmit={handleSubmit} >

                <Label name='Photo' formReviewed={formData.formReviewed} isValid={formData.photo.isValid} />
                <FileInput name='photo' onChange={handleFileChange} />

                <Label name='Phone Number' formReviewed={formData.formReviewed} isValid={formData.phoneNumber.isValid} />
                <Input type='number' name='phoneNumber' value={formData.phoneNumber.value} onChange={handleChange} />            
            
                <Label name='Address' formReviewed={formData.formReviewed} isValid={formData.address.isValid} />
                <Input type='text' name='address' value={formData.address.value} onChange={handleChange} />
            
                <Label name='email' formReviewed={formData.formReviewed} isValid={formData.email.isValid} />
                <Input type='email' name='email' value={formData.email.value} onChange={handleChange} />
            
                <Label name='Date of Birth' formReviewed={formData.formReviewed} isValid={formData.dateOfBirth.isValid} />
                <Input type={dateType} name='dateOfBirth' value={formData.dateOfBirth.value} onFocus={onDateFocus} onBlur={onDateBlur} onChange={handleChange} />

                <Label name='Security Question 1' formReviewed={formData.formReviewed} isValid={formData.question1.isValid} />
                <Select name='question1' defaultValue={'default'} onChange={handleChange} >{options}</Select>

                <Label name='Answer 1' formReviewed={formData.formReviewed} isValid={formData.answer1.isValid} />
                <Input type='text' name='answer1' value={formData.answer1.value} onChange={handleChange} />

                <Label name='Security Question 2' formReviewed={formData.formReviewed} isValid={formData.question2.isValid} />
                <Select name='question2' defaultValue={'default'} onChange={handleChange} >{options}</Select>

                <Label name='Answer 2' formReviewed={formData.formReviewed} isValid={formData.answer2.isValid} />
                <Input type='text' name='answer2' value={formData.answer2.value} onChange={handleChange} />

                <Label name='Security Question 3' formReviewed={formData.formReviewed} isValid={formData.question3.isValid} />
                <Select name='question3' defaultValue={'default'} onChange={handleChange}>{options}</Select>

                <Label name='Answer 3' formReviewed={formData.formReviewed} isValid={formData.answer3.isValid} />
                <Input type='text' name='answer3' value={formData.answer3.value} onChange={handleChange} />

                <Button type='submit' value='Sign Up' onChange={handleChange} />
                
            </Form>
        </Wrapper>
    )
}