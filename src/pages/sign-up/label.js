import React, { useState } from 'react'
import styled from '@emotion/styled'
import { baseColor, breakpoint } from '../../theme'

const check = 'src/pages/sign-up/check.png'
const error = 'src/pages/sign-up/wrong.png'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;    
`

const LabelName = styled.label`
    align-self: center;
    font-size: 1.2rem;
    font-weight: 800;
    margin-right: 0px;
    color: ${baseColor};

    @media only screen and (min-width: ${breakpoint}) {
        margin-right: 30px;
    }
`

const StatusIcon = styled.img`
    margin-right: 2rem;
`

export const Label = props => 
    <Wrapper>
        {console.log(props)}
        <LabelName>{props.name}:</LabelName>
        {props.isProcessed && <StatusIcon src={props.isValid ? check : error} />}   
    </Wrapper>