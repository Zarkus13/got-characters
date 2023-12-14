import { Character } from '../../../../models/Character.ts';
import {
  Biography,
  BiographyLoading,
  CharacterData,
  CharacterFamily,
  CharacterItemContainer,
  CharacterName,
  CharacterPortrait,
  CharacterPortraitWrapper,
  CharacterTitle,
  PixarizeItHint,
  PixarizeWrapper,
  ShowMoreDetailsData,
} from './CharacterItem.style.tsx';
import { PiArrowBendUpLeftBold, PiCastleTurretBold, PiMedalBold } from 'react-icons/pi';
import Button from '../../../../components/Button/Button.tsx';
import { useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import {
  useFetchCharacterBiography,
  useFetchCharacterDescription,
  useGenerateCharacterPixarPortrait,
} from '../../../../api/openai.ts';
import Loader from '../../../../components/Loader/Loader.tsx';

interface Props {
  idInPage: number;
  character: Character;
}

const CharacterItem = ({ idInPage, character }: Props) => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [pixarize, setPixarize] = useState(false);
  const description = useRef<string | null>(null);

  const { data: dataBiography, isLoading: isBiographyLoading } = useFetchCharacterBiography(
    character.fullName,
    showMoreDetails
  );
  const { data: dataDescription, isLoading: isDescriptionLoading } = useFetchCharacterDescription(
    character.fullName,
    pixarize
  );
  const { data: pixarImageUrl, isLoading: isImageGenerating } = useGenerateCharacterPixarPortrait(
    character.fullName,
    description,
    !!dataDescription
  );

  if (dataDescription) description.current = dataDescription;

  return (
    <CharacterItemContainer
      initial={{ opacity: 0, translateX: -200 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.2, delay: 0.05 * idInPage }}
      showmoredetails={showMoreDetails}
    >
      <CharacterPortraitWrapper showmoredetails={showMoreDetails} ispixarized={!!pixarImageUrl}>
        <CharacterPortrait
          alt={character.fullName + ' portrait'}
          src={pixarImageUrl || character.imageUrl}
        />
        <PixarizeWrapper
          show={isDescriptionLoading || isImageGenerating}
          onClick={() => setPixarize(true)}
        >
          {!pixarize && (
            <>
              Click here to <br />
              Pixarize !
            </>
          )}

          {isDescriptionLoading && <>Retrieving portrait description ...</>}

          {isImageGenerating && <>Pixarizing {character.fullName} ...</>}
        </PixarizeWrapper>
      </CharacterPortraitWrapper>

      <AnimatePresence>
        {showMoreDetails && !pixarImageUrl && !isDescriptionLoading && !isImageGenerating && (
          <PixarizeItHint
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
          >
            <div>
              Click to <br />
              Pixarize it !
            </div>
            <PiArrowBendUpLeftBold />
          </PixarizeItHint>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!showMoreDetails && <CharacterDetails character={character} showMoreDetails={false} />}
      </AnimatePresence>

      <AnimatePresence>
        {!showMoreDetails && (
          <Button
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            onClick={() => setShowMoreDetails(true)}
          >
            More details
          </Button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMoreDetails && (
          <ShowMoreDetailsData
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
          >
            <CharacterDetails character={character} showMoreDetails />
            <Biography>
              <span>Biography</span>

              {isBiographyLoading && (
                <BiographyLoading>
                  <Loader />
                  Asking a biography to ChatGPT !
                </BiographyLoading>
              )}

              {!isBiographyLoading && dataBiography}
            </Biography>
          </ShowMoreDetailsData>
        )}
      </AnimatePresence>
    </CharacterItemContainer>
  );
};

interface CharacterDetailsProps {
  character: Character;
  showMoreDetails: boolean;
}

const CharacterDetails = ({ character, showMoreDetails }: CharacterDetailsProps) => (
  <CharacterData
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
    showmoredetails={showMoreDetails}
  >
    <CharacterName>{character.fullName}</CharacterName>

    <CharacterFamily>
      <PiCastleTurretBold />
      {character.family}
    </CharacterFamily>

    <CharacterTitle>
      <PiMedalBold />
      {character.title}
    </CharacterTitle>
  </CharacterData>
);

export default CharacterItem;
