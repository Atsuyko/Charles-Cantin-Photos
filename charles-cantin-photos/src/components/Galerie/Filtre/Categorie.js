import React from 'react';
import styled from 'styled-components';

export default function Categorie({ filterCategory, tabsData }) {
  return (
    <Wrapper>
      {tabsData.map((category, index) => {
        return (
          <button
            onClick={() => filterCategory(category)}
            type="button"
            className="btn mx-2 my-2 text-capitalize"
            key={index}
          >
            {' '}
            {category}{' '}
          </button>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
font-family: Poppins;
& button{
  background-color: #47555E;
  color: #EEEEEE;
}
`
