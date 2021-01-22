import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../constants/deploy.js';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

const StyledDetails = styled.div`
    color: white;
    font-size: 2rem;

`


export default function Details(props) {
    const { eachDetail, close } = props;

    return (
        <StyledDetails>
            <h2>Details:</h2>
            
                
                    <p>Name: {eachDetail.name}</p>
                    <p>Height: {eachDetail.height}</p>
                    <p>Mass: {eachDetail.mass}</p>
                    <p>Hair Color: {eachDetail.hair_color}</p>
                    <p>Skin Color: {eachDetail.skin_color}</p>
                    <p>Eye Color: {eachDetail.eye_color}</p>
                    <p>Birth Year: {eachDetail.birth_year}</p>
                    <p>Gender: {eachDetail.gender}</p>
                    <p>Home World: {eachDetail.homeworld}</p>
                
            
            <button onClick={close}>Close</button>
        </StyledDetails>
    )
}
