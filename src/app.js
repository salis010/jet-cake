import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Header } from './partials/header'
import { Hero } from './pages/hero'
import { SignUp } from './pages/sign-up/sign-up'	
import { LogIn } from './pages/log-in/log-in'	
import { Footer } from './partials/footer'


const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`

const ContentWrapper = styled.div`
	display: flex;
	flex: 1;
	background-color: beige;
`

export const App = () => {
	
	const [isLoggedIn, setIsLoggedIn] = useState(false)

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

	return (
		<Wrapper>
			<Header isLoggedIn={isLoggedIn} />
			{/* <SignUp formData={formData} setFormData={setFormData} /> */}
			<LogIn formData={formData} />
			{/* <ContentWrapper><Hero /></ContentWrapper> */}
			<Footer />
		</Wrapper>
	)
}
