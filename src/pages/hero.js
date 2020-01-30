import React from 'react'
import styled from '@emotion/styled'
import { maxWidth } from '../theme'

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
`

const ContentWrapper = styled.div`
    width: 100%;
    max-width: ${maxWidth};
`

const Img = styled.img`
    width: 100%;
`

const Content = styled.div`
    padding: 20px;
    text-align: justify;    
`

const H2 = styled.h2`
    margin-top: 0;
`

export const Hero = () =>
    <Wrapper>
        <ContentWrapper>
            <Img src='src/pages/images/jeeg.jpg' alt='jeeg'/>
            <Content>
                <H2>“They call me Jeeg”: an all Italian super hero story</H2>
                <p>Director Gabriele Mainetti, already known for short movies  with comic inspiration like “Basette” (2008) and “Tiger Boy” (2012), brings to the big screen something completely new to Italian cinema: a  movie, shoot in Italy and with Italian characters, about a superhero with super powers.</p>
                <p>It’s Italy’s first take on this kind of storytelling, which is purely American. This movie is very similar to Spider Man’s  with an all Italian  seasoning. With a Roman set, “ Lo chiamavano Jeeg Robot” (They call me Jeeg) takes place on the outskirts of  Torbella Monaca. The plot is about a low rank thief, called Enzo Ceccotti (Claudio Santamaria) who happens to fall into the Tiber and comes into contact with a harmful substance that leads him to a troubled night from which he will emerge with superhuman strength. So far, it sounds like Spider Man, but with a hint of irony about the Tiber, which is so dirty that if you fall into it, you risk to become a superhero!</p>
                <p>Enzo Ceccotti, in the beginning, will use his powers for selfish ends: robbery of ATMs, stealing the yogurt he loves and so forth. But the meeting with an orphan girl, Alessia (Ilene Pastorelli), a huge fan of the Japanese anime Jeeg will change our villain’s life. Her father was killed in a firefight where Ceccotti  was present. The girl lives in a world of her own, an almost fantastic one, and made comic fairytale plots, to escape the brutal, dirty and miserable reality in which she lives.</p>
                <p>The relationship between the two will drive Ceccotti to change  and to  assume the characteristics of superhero. Even up to now, it is very Spider Man (remember the dialogue between Peter Parker and Ben Parker regarding powers and responsibilities). Real villain’s criminal activities , Fabio Cannizzaro, aka Zingaro (Luca Marinelli), is disturbed and troubled by the presence of this super man with super powers.  Like every respectable bad guy, he will do anything to gain the same powers. And yes, it is still Marvel-ish .</p>
                <p>So, what makes this movie so particular? Its characters.</p>
                <p>Writer and Director did an exceptional work. They created and developed characters and environments fitting perfectly into a predictable plot that blended with the characters turns the movie into a pleasant and even funny story.  Marinelli’s remarkable interpretation of the villain is full of irony and italianity, making me perfectly despicable. He is, without any doubt the “Hiram Key” of the whole movie.</p>
            </Content>
        </ContentWrapper>
    </Wrapper>