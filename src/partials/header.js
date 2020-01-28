import React from 'react'
import styled from '@emotion/styled'
import { MenuItem } from './menu-item'
import { maxWidth, headerHeight, baseColor } from '../theme'

const menuItems = ['Sign-Up', 'Log-In']

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${headerHeight};
    background-color: ${baseColor};
`

const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: ${maxWidth};
`

const LSWrapper = styled.div`
    display: flex;
`

const Img = styled.img`
    margin: 0px 20px;
`

export const Header = props => {
    return (
        <Wrapper>
            <ContentWrapper>
                <Img src='src/partials/home.png' alt='H' />
                {props.isLoggedIn && <Img src='src/partials/profile.png' alt='P' />}
                {!props.isLoggedIn && 
                    <LSWrapper>
                        {menuItems.map((item, i) => <MenuItem key={i} text={item} /> )}
                    </LSWrapper>
                }   
            </ContentWrapper>
        </Wrapper>
    )
}