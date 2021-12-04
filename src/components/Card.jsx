import React from "react";
import styled from "styled-components";

import Marker from '../assets/images/marker.svg';


const CardContainer = styled.div`
    margin: .65em auto;
    width: 50%;
    height: 320px;
    padding: 1.95em 0;
    border-bottom: 1px solid #F5F5F5;
    display: flex;
`

const CardImage = styled.img`
    flex-grow:1;
    max-width: fit-content;

`
const CardContent = styled.div`
    flex-grow:3;
    padding: 0.85em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

const ContentHeader = styled.div`
    display: flex;
    align-items: center;
`
const CardMarker = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 6px;
    display: inline-block;

`
const ContentLocation = styled.p`
    font-size: 1.0rem;
    display: inline;
    font-weight: 400;
    color: #2B283A;
    letter-spacing: 2px;
    text-transform: uppercase;
`
const Link = styled.a`
    margin-left: 10px;
    color: #918E9B;
`
const ContentTitle = styled.h1`
    color: #918E9B;
    font-weight: 600;
    font-size: 3em;
    margin-left: 2px;
    margin-top: 10px;
`
export default function Card(props){
    return(
        <div>
            <CardContainer>
                <CardImage src={props.image} />
                <CardContent>
                  <ContentHeader>
                    <CardMarker src={Marker} />
                    <ContentLocation>{props.country}</ContentLocation>
                    <Link href={props.mapUrl}>View on Google Maps</Link>
                  </ContentHeader>

                  <ContentTitle> {props.name} </ContentTitle>
                  <span>{props.startDate}, {props.startYear} - {props.endYear}, {props.endDate}</span>
                  <p>{props.description}</p>
                </CardContent>
            </CardContainer>
        </div>
    )
}