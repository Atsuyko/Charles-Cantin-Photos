import styled from 'styled-components';
import Grossesse1 from '../../img/grossesse1.jpg';
import Grossesse2 from '../../img/grossesse2.jpg';

export default function Grossesse() {
  return (
    <Wrapper>
      <h3>Grossesse</h3>
      <div class="row row-cols-1 row-cols-md-2">
        <section class="col">
          <div class="card">
            <img src={Grossesse1} class="card-img-top rounded-1" alt="" />
          </div>
        </section>
        <section class="col">
          <div class="card">
            <img src={Grossesse2} class="card-img-top rounded-1" alt="" />
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