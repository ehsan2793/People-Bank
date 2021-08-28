import React from 'react';
import {Button} from "../ButtonElements"; /*if didnt work import it from react-scroll min 1:46*/
// import {Button} from "react-scroll";

import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img
} from './infoElements'

const InfoSection = ({
                         lightBg,
                         id,
                         imgStart,
                         topLine,
                         lightText,
                         headLine,
                         darkText,
                         description,
                         buttonLabel,
                         image,
                         alt,
                         primary,
                         dark,
                         dark2
                     }) => {


    return (
        <>
            <InfoContainer id={id} lightBg={lightBg}>
                <InfoWrapper>

                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>

                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine} </Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to={"/signUp"}

                                            primary={primary ? 1 : 0}
                                            dark={dark ? 1 : 0}
                                            dark2={dark2 ? 1 : 2}

                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={image} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>

        </>
    )
}
export default InfoSection
    



