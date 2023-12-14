import { HomeContainer, HomeTitle, SiteDescription } from './Home.style.tsx';
import Link from '../../components/Link/Link.tsx';

const Home = () => {
  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <HomeTitle>Game of Thrones Characters</HomeTitle>
      <SiteDescription>
        Welcome ! Come and extend your knowledge of Game of Thrones characters thanks to{' '}
        <a href="https://anapioficeandfire.com/">An API of Ice and Fire</a> <br />
        <small>(and a little bit of ChatGPT and DallE 3)</small>
      </SiteDescription>
      <Link to="/characters">Go to characters list !</Link>
    </HomeContainer>
  );
};

export default Home;
