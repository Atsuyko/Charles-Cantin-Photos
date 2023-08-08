import styled from 'styled-components';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div``