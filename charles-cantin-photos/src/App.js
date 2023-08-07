import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from 'components/UI/Layout';
import Accueil from 'components/Accueil';
import Galerie from 'components/Galerie';
import TarifsEtPresations from 'components/TarifsEtPresations';
import Contact from 'components/Contact';
import Facebook from 'components/Facebook';
import Instagram from 'components/Instagram';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route element={<Accueil />} path='/' />
          <Route element={<Galerie />} path='/galerie' />
          <Route element={<TarifsEtPresations />} path='/tarifs-et-prestations' />
          <Route element={<Contact />} path='/contact' />
        </Routes>
      </Layout>
    </Router>
  )
}
