import React from 'react';
import {AiOutlineGithub, AiFillLinkedin} from 'react-icons/ai';
import {FaReact} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    FooterLinkContainer,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebSiteRights,
    SocalIcons,
    SocialIconLink,
} from './FooterElements'
import {animateScroll as scroll} from "react-scroll";

const Footer = () => {
    const toggleHome =() => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinkContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                            <FooterLink to={'/signIn'}>Services</FooterLink>
                            <FooterLink to={'/signIn'}>Account</FooterLink>
                            <FooterLink to={'/signIn'}>Career Opportunities</FooterLink>
                            <FooterLink to={'/signIn'}>investment</FooterLink>
                            <FooterLink to={'/signIn'}>Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Account </FooterLinkTitle>
                            <FooterLink to={'/signIn'}>Manage Account</FooterLink>
                            <FooterLink to={'/signIn'}>New Account</FooterLink>
                            <FooterLink to={'/signIn'}>Learn </FooterLink>
                            <FooterLink to={'/signIn'}>Accessibility.</FooterLink>
                            <FooterLink to={'/signIn'}>Education</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> For Government </FooterLinkTitle>
                            <FooterLink to={'/signIn'}>Account</FooterLink>
                            <FooterLink to={'/signIn'}>Benefit</FooterLink>
                            <FooterLink to={'/signIn'}> Diversity</FooterLink>
                            <FooterLink to={'/signIn'}>Privacy</FooterLink>
                            <FooterLink to={'/signIn'}>Racial Equity and Justice</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Help for homeowners </FooterLinkTitle>
                            <FooterLink to={'/signIn'}>Loans</FooterLink>
                            <FooterLink to={'/signIn'}>Online Banking</FooterLink>
                            <FooterLink to={'/signIn'}>Mobile Banking</FooterLink>
                            <FooterLink to={'/signIn'}>Student Center</FooterLink>
                            <FooterLink to={'/signIn'}>Deposit</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinkContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to={'/'} onClick={toggleHome}> ❖ People Bank ❖ </SocialLogo>
                        <WebSiteRights> All Right reserved. {new Date().getFullYear()}  </WebSiteRights>
                        <SocalIcons>
                            <SocialIconLink href="https://github.com/ehsan2793" target='_blank' aria-label="Github">
                                <AiOutlineGithub/>
                            </SocialIconLink>
                            <SocialIconLink href="www.linkedin.com/in/e-rahimi" target='_blank' aria-label="linkedin">
                                <AiFillLinkedin/>
                            </SocialIconLink>
                            <SocialIconLink href="https://react-icons.github.io/" target='_blank' aria-label="React">
                                <FaReact/>
                            </SocialIconLink>


                        </SocalIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>

        </FooterContainer>
    )
}

export default Footer