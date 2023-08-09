import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

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