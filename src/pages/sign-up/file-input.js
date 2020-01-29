import React, { useState, useRef } from 'react'
import styled from '@emotion/styled'
import { breakpoint } from '../../theme'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    height: 2.4rem;
    width: 100%;
    border: 3px solid grey;
    border-radius: 0.5em;
    margin-bottom: 1rem;

    @media only screen and (min-width: ${breakpoint}) {
        margin-bottom: 0;
    }
`

const Label = styled.label`
    flex: 1;
    font-size: 1.2rem;
    margin: 1rem;
`

const Input = styled.input`
    position: absolute;
    top: 0px;
    right: 0px;
    width: 1px;
    height: 1px;
    color: grey;
    background-color: grey;
    z-index: 1;
`

const Button = styled.button`
    height: 2.4rem;
    width: 7rem;
    font-size: 1rem;
    color: white;
    background-color: grey;
    border: none;
    outline: none;
    z-index: 2;
`

export const FileInput = props => {

    const [ file, setFile ] = useState('')
    const [ fileName, setFileName ] = useState('')
    const ref = useRef(null)

    const handleClick = event => {
        ref.current.click()
        event.preventDefault()
    }

    const handleFileSelection = event => {
        // the below returns 'C:\fakepath\fileName.png' even on Linux,
        // and is not in String format, so cannot be used for the Label
        
        setFile(event.target.value) 

        // so we pick the name instead
        setFileName(event.target.files[0].name)

        props.onChange(event)
    }
    
    return (
        <Wrapper>
            <Label>{fileName}</Label>
            <Input type='file' name={props.name} value={file} ref={ref} required={props.required} onChange={handleFileSelection} />
            <Button onClick={handleClick}>Choose File</Button>
        </Wrapper>
    )
}