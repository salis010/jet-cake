import React from 'react'
import { Link } from 'react-router-dom'
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
    cursor: pointer;

    &:last-child { margin-right: 0; }

    &:hover {
        background-color: ${menuItemHover};
    }
`

const MenuLink = styled(Link)`
    text-decoration: none;
`

export const MenuItem = props =>
    <MenuLink to={props.to}>
        <Wrapper>
            {props.text}
        </Wrapper>
    </MenuLink>