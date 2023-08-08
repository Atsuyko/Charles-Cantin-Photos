import styled from 'styled-components';
import Bg from '../img/accueil.jpg';

export default function Accueil() {
  return (
    <Wrapper>
      <div>
        <img src={Bg} alt='Bébé'></img>
        <p>Charles Cantin - Photographe</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
font-family: Ubuntu;
& img {
  width: 100vw;
  position: relative;
  top: 0;
  left: 0;
}
& p {
  z-index: 1;
  position: absolute;
  text-align: center;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 45%;
  width: 70%;
  color: #47555E;
}
@media screen and (max-width: 992px) {
  p {
    font-size: 3em;
    top: 35%;
  }
}

@media screen and (max-width: 576px) {
  p {
    font-size: 2em;
    top: 30%;
  }
}

@media screen and (min-width: 992px) and (max-width: 1276px) {
  p {
    font-size: 5em;
  }
}
@media screen and (min-width: 1276px) {
  p {
    font-size: 5em;
  }
  & img {
      max-height: calc(100vh - 180px);
  }
}
`