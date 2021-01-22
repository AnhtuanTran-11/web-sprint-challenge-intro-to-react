// Write your Character component here
import React from 'react';
import styled, { keyframes } from 'styled-components';
import Details from './Details';


const StyledCharacter = styled.div`

  button {
    color: ${props => props.theme.firstColor};
    &:hover {
      transform: scale(1.5);
      transition: all 0.5s ease-in-out;
    }
      transition: all 0.5s ease-in-out;
      padding: 10px;
      justify-content: space-between;
  }

  &:hover { // The & is referring to the div in styled.div
    color: ${props => props.theme.secondaryColor};
    background-color: ${props => props.theme.fifthColor};
    transition: all 0.7s ease-in-out;
  }
    transition: all 0.7s ease-in-out;

    font-weight: 300;
    
`


export default function CharacterList(props) {
  const { info, action } = props;
  
  const handleClicker = () => action(info);
    console.log(props);
    return (
      <StyledCharacter>
        <button onClick={ handleClicker }>
          {info.name}
          </button>
          {/* <Details eachDetail={info} /> */}
        </StyledCharacter>
    )
  }