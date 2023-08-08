import styled from 'styled-components';

export default function TarifsEtPresations() {
  return (
    <Wrapper className='text-center'>
      <h2 className='my-3'>Tarifs et presations</h2>
      <div>
        <p className='mx-4 p-2'>
          « Juste moi » (130 euros) : Séance pour une personne, en extérieur ou en studio.
        </p>
        <p className='mx-4 p-2'>
          « Pour deux » (195 euros) : Pour deux personnes, en extérieur ou en studio.
        </p>
        <p className='mx-4 p-2'>
          « Famille » (220 euros) : Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou en studio 30
          euros en supplément par personne au-delà de 4 (hormis enfant jusqu’à 2 ans)
        </p>
        <p className='mx-4 p-2'>
          « Il était une fois » (160 euros) : Photo de grossesse (À votre domicile, en extérieur ou en studio).
        </p>
        <p className='mx-4 p-2'>
          « Mon bébé » (100 euros) : Photo d’enfant jusqu’à 3 ans (photo à domicile).
        </p>
        <p className='mx-4 p-2'>
          « J’immortalise l’événement » (sur devis) : Prestation de mariage ou baptême sur mesure.
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
color: #47555E;
& h2 {
  font-family: Ubuntu;
}
& p {
  font-family: Poppins;
}
`