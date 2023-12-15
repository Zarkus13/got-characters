import { CharactersListContainer, Header, SearchField, Title } from './CharactersList.style.tsx';
import { TiChevronLeft } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader/Loader.tsx';
import CharacterItem from './components/CharacterItem/CharacterItem.tsx';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Character } from '../../models/Character.ts';
import { useFetchCharacters } from '../../api/characters.ts';
import { useState } from 'react';

const CharactersList = () => {
  const { data, isLoading, fetchNextPage, hasNextPage } = useFetchCharacters();
  const [searchTerm, setSearchTerm] = useState('');

  const characters: Character[] = ((data?.pages.flatMap((p) => p) || []) as Character[]).filter(
    (c) => c.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <CharactersListContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Header>
        <Link to="/">
          <TiChevronLeft />
          Home
        </Link>
      </Header>

      <InfiniteScroll
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<Loader />}
        scrollableTarget="#root"
        scrollThreshold="400px"
        dataLength={characters.length}
      >
        <Title>Game of Throne Characters</Title>

        <SearchField
          type="text"
          placeholder="Search ..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {isLoading && <Loader />}

        {!isLoading &&
          characters.map((character, id) => (
            <CharacterItem
              key={character.id + '-' + id}
              idInPage={character.id}
              character={character}
            />
          ))}
      </InfiniteScroll>
    </CharactersListContainer>
  );
};

export default CharactersList;
