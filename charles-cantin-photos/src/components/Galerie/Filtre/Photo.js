import React from 'react';
import styled from 'styled-components';

export default function Photo({ data }) {
  return (
    <Wrapper className="row" >
      {data.map(value => {
        const { id, image } = value
        return (
          <div className="col-sm-6 my-3" key={id} >
            <div className="card text-center bg-light ">
              <img src={image} className="img-fluid rounded-1" alt='' />
            </div>
          </div>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div``