import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default function Layout({ children }) {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div``

const Main = styled.div`
min-height: calc(100vh - 160px)
`