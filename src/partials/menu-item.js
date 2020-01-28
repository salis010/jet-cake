import React from 'react'
import styled from '@emotion/styled'
import { headerHeight, menuItem, menuItemHover, menuColor } from '../theme'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7em;
    height: ${headerHeight};
    margin-right: 1px;
    color: ${menuColor};
    background-color: ${menuItem};

    &:last-child { margin-right: 0; }

    &:hover {
        background-color: ${menuItemHover};
    }
`

export const MenuItem = props =>
    <Wrapper>
        {props.text}
    </Wrapper>