import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Header } from './partials/header'
import { Hero } from './pages/hero'
import { SignUp } from './pages/sign-up/sign-up'	
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

	return (
		<Wrapper>
			<Header isLoggedIn={isLoggedIn} />
			<SignUp></SignUp>
			<ContentWrapper><Hero /></ContentWrapper>
			<Footer></Footer>
		</Wrapper>
	)
}
