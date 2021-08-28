import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLinks,SideBtnWrap,SidebarRoute} from './SideBarElements'


const SideBar = ({toggle,isOpen}) => {

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLinks smooth={true}
                                      duration={500}
                                      spy={true}
                                      exact={'true'}  to={'about'} onClick={toggle}> About</SidebarLinks>
                    <SidebarLinks smooth={true}
                                      duration={500}
                                      spy={true}
                                      exact={'true'} to={'discover'} onClick={toggle}> Discover</SidebarLinks>
                    <SidebarLinks smooth={true}
                                      duration={500}
                                      spy={true}
                                      exact={'true'} to={'services'} onClick={toggle}> Services</SidebarLinks>
                    <SidebarLinks smooth={true}
                                      duration={500}
                                      spy={true}
                                      exact={'true'} to={'manage'} onClick={toggle}> Manage</SidebarLinks>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to={"/signin"}>Sign in</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )


}

export default SideBar