import styled from '@emotion/styled'
import { breakpoint } from '../../theme'

export const Form = styled.form`
    display: grid;
    grid-template-columns: 100%;
    grid-row-gap: 1rem;
    grid-column-gap: 0;
    width: 90%;
    margin: 20px 0px;

    @media only screen and (min-width: ${breakpoint}) {
        grid-template-columns: 15rem auto;
        grid-row-gap: 2rem;
        max-width: 60rem;
        margin: 40px 0px;
    }
`