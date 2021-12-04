import React from "react";

import styled  from "styled-components";
import Logo from '../assets/images/logo.svg'

const Nav = styled.header`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#F55A5A;
    height:80px;
    text-align:center;
    padding: 1.0em;
    color:#ffff
`;

const NavText = styled.h2`
    font-size:25px;
`;

const NavLogo = styled.img`
    display:inline-block;
    width:24px;
    height:24px;
    margin-right:5px;
`;

export default function Header(){
    return(
        <Nav>
            <NavLogo src={Logo}></NavLogo>
            <NavText> Travel Book</NavText>
        </Nav>
    );
}