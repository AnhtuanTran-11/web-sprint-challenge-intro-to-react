// Write your Character component here
import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function CharacterList(props) {
    const { info, action } = props;
    return (
        <button onClick={() => action(info.name)}>
          {info.name}
        </button>
    )
  }