import styled from 'styled-components';
import { Link } from "react-router-dom";
import Logo from '../img/Logo2.png';
import { Button } from "react-bootstrap";

export default function Header() {
  return (
    <Wrapper>
      <Link to="/"><img src={Logo} alt="Logo" /></Link>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/galerie">Galerie</Link>
        <Link to="/tarifs-et-prestations">Tarifs et prestations</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.header`
background-color: #47555E;
color: #EEEEEE;
font-family: Ubuntu;
height : 100px;
display: flex;
justify-content: center;
padding : 0px 24px;
align-items: center;
& a {
  text-decoration: none;
  color: inherit;
  margin-right: 20px;
}
& img{
  height: 78px;
}
& nav {
  padding: 50px;
  margin-top: 20px;
}
`