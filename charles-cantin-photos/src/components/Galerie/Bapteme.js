import styled from 'styled-components';
import Bapteme1 from '../../img/bapteme1.jpg';
import Bapteme2 from '../../img/bapteme2.jpg';

export default function Bapteme() {
  return (
    <Wrapper>
      <h3>Bapteme</h3>
      <div class="row row-cols-1 row-cols-md-2">
        <section class="col">
          <div class="card">
            <img src={Bapteme1} class="card-img-top rounded-1" alt="" />
          </div>
        </section>
        <section class="col">
          <div class="card">
            <img src={Bapteme2} class="card-img-top rounded-1" alt="" />
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