import React from "react";

import styled  from "styled-components";
import Logo from '../assets/images/logo.svg'

const Nav = styled.header`
    background-color:#F55A5A;
    height:80px;
    text-align:center;
    padding: 1.0em;
    color:#ffff;
`;

const NavText = styled.h2`
    font-size:25px;
    color: #ffff;
    font-weight: 800;
`;

const NavLogo = styled.img`
    display:inline-block;
    width:24px;
    height:24px;
    margin-right:5px;
`;

const NavContent = styled.div`
   display:flex;
    justify-content:flex-start;
    align-items:center;
    margin: 0 24%;
`;

export default function Header(){
    return(
        <Nav>
            <NavContent>
                <NavLogo src={Logo}></NavLogo>
                <NavText> Travel Book</NavText>
            </NavContent>
        </Nav>
    );
}