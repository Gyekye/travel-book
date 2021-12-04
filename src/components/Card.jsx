import React from "react";
import styled from "styled-components";

import Image from '../assets/images/img-1.png';


const CardContainer = styled.div`
    margin: .65em auto;
    width: 60%;
    height: 320px;
    border-bottom: 1px solid #F5F5F5;
    display: flex;
`

const CardImage = styled.img`
    width: 30%;
    object-fit: contain;
    padding: 0.85em;

`
const CardContent = styled.div`
   width: 70%;
   padding: 0.85em;
`
export default function Card(props){
    return(
        <div>
            <CardContainer>
                <CardImage src={Image} />
                <CardContent>
                    I am the content
                </CardContent>
            </CardContainer>
        </div>
    )
}