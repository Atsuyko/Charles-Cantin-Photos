import styled from 'styled-components';
import Bebe1 from '../../img/bebe1.jpg';
import Bebe2 from '../../img/bebe2.jpg';

export default function Bebe() {
  return (
    <Wrapper>
      <h3>Bébé</h3>
      <div class="row row-cols-1 row-cols-md-2">
        <section class="col">
          <div class="card">
            <img src={Bebe1} class="card-img-top rounded-1" alt="" />
          </div>
        </section>
        <section class="col">
          <div class="card">
            <img src={Bebe2} class="card-img-top rounded-1" alt="" />
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