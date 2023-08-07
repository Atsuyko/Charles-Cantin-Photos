import styled from 'styled-components';

export default function Header() {
  return (
    <Wrapper>
      <h1>Hello World</h1>
    </Wrapper>
  )
}

const Wrapper = styled.header`
height : 80px;
display: flex;
justify-content: space-between;
padding : 0px 24px;
align-items: center;
border-bottom: solid 1px;
`