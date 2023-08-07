import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Facebook from './Facebook';
import Instagram from './Instagram';

export default function Footer() {
  return (
    <Wrapper>
      <Link to="/facebook"><Facebook /></Link>
      <Link to="/instagram"><Instagram /></Link>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
height : 80px;
display: flex;
justify-content: center;
align-items: center;

font-family: Ubuntu;
color: #EEEEEE;
background-color: #47555E;
& a{
  margin-right: 20px;
  text-decoration: none;
  color: inherit;
}
`