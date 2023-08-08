import styled from 'styled-components';
import Filtre from './Galerie/Filtre/Filtre';

export default function Galerie() {

  return (
    <Wrapper className="container text-center">
      <h2>Galerie</h2>
      <Filtre />
    </Wrapper>
  )
}

const Wrapper = styled.div`
& div {
  margin-top: 20px;
  margin-bottom: 10px;
}
font-family: Ubuntu;
color: #47555E;
`