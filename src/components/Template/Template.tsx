import { Route, Routes, useLocation, useMatch } from 'react-router-dom';
import { TemplateContainer, TemplateContent, ThroneImg } from './Template.style.tsx';
import Throne from './assets/throne.png';
import Home from '../../pages/Home/Home.tsx';
import CharactersList from '../../pages/CharactersList/CharactersList.tsx';
import { AnimatePresence } from 'framer-motion';

const Template = () => {
  const isHome = !!useMatch('/');
  const location = useLocation();

  console.log('pathname', location.pathname);

  return (
    <TemplateContainer>
      <ThroneImg src={Throne} alt="A pop representation of the Iron Throne" show={isHome} />

      <TemplateContent>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<CharactersList />} />
          </Routes>
        </AnimatePresence>
      </TemplateContent>
    </TemplateContainer>
  );
};

export default Template;
