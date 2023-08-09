import styled from 'styled-components';

export default function Contact() {
  return (
    <Wrapper className='mx-5 my-3'>
      <h2 className='text-center'>Contact</h2>
      <form name="contact" method="POST" netlify>
        <input type="hidden" name="form-name" value="contact" />
        <div className='row g-3 justify-content-center'>
          <div className="col-md-5">
            <label for="firstname" className="form-label">Prénom</label>
            <input type="text" className="form-control" name="firstName" id="firstName" placeholder='Prénom...' />
          </div>
          <div className="col-md-5">
            <label for="lastname" className="form-label">Nom</label>
            <input type="text" className="form-control" name="lastName" id="lastName" placeholder='Nom...' />
          </div>
          <div className="col-md-5">
            <label for="email" className="form-label">E-mail</label>
            <input type="email" className="form-control" name="email" id="email" placeholder='email@example.com' />
          </div>
          <div className="col-md-5">
            <label for="phoneNumber" className="form-label">Téléphone</label>
            <input type="tel" className="form-control" name="phoneNumber" id="phoneNumber" placeholder='0601020405' />
          </div>
          <div className="col-md-9">
            <label for="message" className="form-label">Message</label>
            <textarea className="form-control" name="message" id="message" placeholder='Votre message ici...' />
          </div>
        </div>
        <div className='text-center'>
          <button type="submit" className="btn my-3 px-3">
            Envoyer
          </button>
        </div>
      </form>
    </Wrapper >
  )
}

const Wrapper = styled.div`
font-family: Poppins;
color: #47555E,
& h2 {
  font-family: Ubuntu;
}
& button {
  background-color: #47555E;
  color: #EEEEEE;
}
`