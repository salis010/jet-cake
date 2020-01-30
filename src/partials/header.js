import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { MenuItem } from './menu-item'
import { maxWidth, headerHeight, baseColor } from '../theme'

const menuItems = [
    { text: 'Sign-Up', to: '/signup'}, 
    {text: 'Log-In', to: '/login'},
]

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
    cursor: pointer;
`

export const Header = ({formData, setFormData}) => {
    
    const handleClick = () => {
        const newFormData = Object.assign({}, formData)
        newFormData.formIsValid = false
        newFormData.formReviewed = false
        setFormData(newFormData)
    }

    return (
        <Wrapper>
            <ContentWrapper>
                <Link to='/'><Img src='src/partials/home.png' alt='H' /></Link>
                {formData.formIsValid && <Link to='/profile'><Img src='src/partials/profile.png' alt='P' onClick={handleClick} /></Link>}
                {!formData.formIsValid && 
                    <LSWrapper>
                        {menuItems.map((item, i) => <MenuItem key={i} text={item.text} to={item.to} /> )}
                    </LSWrapper>
                }   
            </ContentWrapper>
        </Wrapper>
    )
}