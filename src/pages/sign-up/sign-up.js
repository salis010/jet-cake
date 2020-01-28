import React, { useState } from 'react'
import styled from '@emotion/styled'
import { baseColor, maxWidth } from '../../theme'

const Wrapper = styled.div`
    display: flex;
    justify-content: center; 
`

const Form = styled.form`
    display: grid;
    grid-template-columns: 100%;
    grid-row-gap: 1em;
    grid-column-gap: 0;
    margin: 20px 0px;

    @media only screen and (min-width: 768px) {
        grid-template-columns: 15em 35em;
        grid-row-gap: 2em;
        margin: 40px 0px;
    }
`

const Label = styled.label`
    align-self: center;
    font-size: 1.6em;
    font-weight: 800;
    margin-right: 0px;
    color: ${baseColor};

    @media only screen and (min-width: 768px) {
        margin-right: 30px;
    }
`

const Input = styled.input`    
    align-self: center;
    height: 2.4em;
    font-size: 1.4em;
    text-indent: 1em;
    border: 3px solid grey;
    border-radius: 0.5em;
    outline: none;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &[type=number] {
        -moz-appearance:textfield;
    }
`

const Button = styled.button`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 9;
    grid-row-end: 10;
    height: 3.2em;
    font-size: 1.8em;
    font-weight: 800;
    color: white;
    background-color: ${baseColor};
    border: none;
    border-radius: 9999px;
    outline: none;

    @media only screen and (min-width: 768px) {
        margin-bottom: 0px;
        grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 5;
    grid-row-end: 6;
    }
`

export const SignUp = props => {

    // removes the date placeholder 'DD/MM/YYYY' from the Date field
    const [ dateType, setDateType ] = useState('text')
    const onDateFocus = () => setDateType('date')
    const onDateBlur = () => setDateType('text')

    return (
        <Wrapper>
            <Form>
                <Label>Phone Number:</Label>
                <Input type='number' />            
            
                <Label>Address:</Label>
                <Input type='text' />
            
                <Label>email:</Label>
                <Input type='email' />
            
                <Label>Date of Birth:</Label>
                <Input type={dateType} onFocus={onDateFocus} onBlur={onDateBlur} />

                <Button>Sign Up</Button>
                
            </Form>
        </Wrapper>
    )
}