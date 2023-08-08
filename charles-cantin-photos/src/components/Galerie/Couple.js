import styled from 'styled-components';
import Couple1 from '../../img/couple1.jpg';
import Couple2 from '../../img/couple2.jpg';

export default function Couple() {
  return (
    <Wrapper>
      <h3>Couple</h3>
      <div class="row row-cols-1 row-cols-md-2">
        <section class="col">
          <div class="card">
            <img src={Couple1} class="card-img-top rounded-1" alt="" />
          </div>
        </section>
        <section class="col">
          <div class="card">
            <img src={Couple2} class="card-img-top rounded-1" alt="" />
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