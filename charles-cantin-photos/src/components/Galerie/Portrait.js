import styled from 'styled-components';
import Portrait1 from '../../img/portrait1.jpg';
import Portrait2 from '../../img/portrait2.jpg';

export default function Portrait() {
  return (
    <Wrapper>
      <h3>Portrait</h3>
      <div class="row row-cols-1 row-cols-md-2">
        <section class="col">
          <div class="card">
            <img src={Portrait1} class="card-img-top rounded-1" alt="" />
          </div>
        </section>
        <section class="col">
          <div class="card">
            <img src={Portrait2} class="card-img-top rounded-1" alt="" />
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