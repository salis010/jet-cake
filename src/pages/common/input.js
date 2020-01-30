import styled from '@emotion/styled'
import { breakpoint } from '../../theme'

export const Input = styled.input`    
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