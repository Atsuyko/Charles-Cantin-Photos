import styled from 'styled-components';
import Mariage1 from '../../img/mariage1.jpg';
import Mariage2 from '../../img/mariage2.jpg';

export default function Mariage() {
  return (
    <Wrapper>
      <h3>Mariage</h3>
      <div class="row row-cols-1 row-cols-md-2">
        <section class="col">
          <div class="card">
            <img src={Mariage1} class="card-img-top rounded-1" alt="" />
          </div>
        </section>
        <section class="col">
          <div class="card">
            <img src={Mariage2} class="card-img-top rounded-1" alt="" />
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