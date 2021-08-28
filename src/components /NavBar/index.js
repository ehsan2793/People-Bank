import React  from "react";
import {Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks,NavBtn,NavBtnLink,} from "./NavbarElements"
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from  'react-scroll'

const NavBar = ({toggle}) => {

    const toggleHome =() => {
        scroll.scrollToTop()
    }
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo to={'/'} onClick={toggleHome}> People Bank </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem >
                            <NavLinks smooth={true}
                                      duration={500}
                                      spy={true}
                                      exact={'true'}

                                to={'about'}> About</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks smooth={true}
                                      duration={500}
                                      spy={true}
                                      exact={'true'}
                                      to={'discover'}> Discover</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks smooth={true}
                                      duration={500}
                                      spy={true}
                                      exact={'true'}to={'services'}> Services</NavLinks>
                        </NavItem>
                        <NavItem >
                            <NavLinks smooth={true}
                                      duration={500}
                                      spy={true}
                                      exact={'true'}
                                      to={'manage'}> Manage</NavLinks>
                        </NavItem>

                    </NavMenu>

                    <NavBtn>
                        <NavBtnLink to={'/signIn'} >Sign In</NavBtnLink>
                    </NavBtn>
                </NavBarContainer>
            </Nav>

        </>
    );
};
export default NavBar
