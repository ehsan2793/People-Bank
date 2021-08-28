import React,{useState} from 'react';
import Video from '../../videos/video.mp4'

import {Button} from '../ButtonElements'
import {HeroContainer,VideoBg,HeroBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight} from './HeroElements'
const HeroSection = () => {

    const[hover,setHover] = useState(false)
    const onHover =() => {
        setHover(!hover)
    }

    return(
        <>
        <HeroContainer id={'home'}>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type={'video/mp4'}/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Global Banking Made Easy </HeroH1>
                <HeroP>
                    Sign up for a new account today
                    and earn $1000 in credit

                </HeroP>
                <HeroBtnWrapper>
                    <Button
                        primary = 'true'
                        dark = 'true'
                        to={'/signUp'} onMouseEnter={onHover} onMouseLeave={onHover}>
                        Get started {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>

        </>
    )
}

export default  HeroSection