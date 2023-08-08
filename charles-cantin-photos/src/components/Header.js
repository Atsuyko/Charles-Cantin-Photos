import styled from 'styled-components';
import { Link } from "react-router-dom";
import Logo from '../img/Logo2.png';

export default function Header() {
  return (
    <Wrapper>
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/"><img src={Logo} alt="Logo" /></Link>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </button>
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto">
              <li className="nav-item mx-3">
                <Link to="/">Accueil</Link>
              </li>
              <li className="nav-item mx-3">
                <Link to="/galerie">Galerie</Link>
              </li>
              <li className="nav-item mx-3">
                <Link to="/tarifs-et-prestations">Tarifs et prestations</Link>
              </li>
              <li className="nav-item mx-3">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Wrapper>
  )
}



const Wrapper = styled.header`
  font-size: 1.2em;
  background-color: #47555E;
  color: #EEEEEE;
  font-family: Ubuntu;
  & a {
    color: inherit;
    text-decoration: none; 
  }
  & button {
    color: #EEEEEE;
  }
  .navbar-nav, .navbar-collapse{
    margin:0 auto;
  }
  & img{
    margin-left: 75%;
    height: 100px;
  }
`