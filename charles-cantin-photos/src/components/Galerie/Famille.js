import styled from 'styled-components';
import Famille1 from '../../img/famille1.jpg';
import Famille2 from '../../img/famille2.jpg';

export default function Famille() {
  return (
    <Wrapper>
      <h3>Famille</h3>
      <div class="row row-cols-1 row-cols-md-2">
        <section class="col">
          <div class="card">
            <img src={Famille1} class="card-img-top rounded-1" alt="" />
          </div>
        </section>
        <section class="col">
          <div class="card">
            <img src={Famille2} class="card-img-top rounded-1" alt="" />
          </div>
        </section>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
font-family: Poppins;
color: #47555E;
`