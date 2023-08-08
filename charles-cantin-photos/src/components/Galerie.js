import styled from 'styled-components';
import Bebe from './Galerie/Bebe';
import Bapteme from './Galerie/Bapteme';
import Couple from './Galerie/Couple';
import Famille from './Galerie/Famille';
import Grossesse from './Galerie/Grossesse';
import Mariage from './Galerie/Mariage';
import Portrait from './Galerie/Portrait';


export default function Galerie() {
  return (
    <Wrapper className="container text-center">
      <h2>Galerie</h2>

      <Bebe />
      <Bapteme />
      <Couple />
      <Famille />
      <Grossesse />
      <Mariage />
      <Portrait />
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