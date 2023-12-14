import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from '../../../../utils/colors.ts';
import { LoaderWrapper } from '../../../../components/Loader/Loader.style.tsx';

interface ShowDetailsProps {
  showmoredetails: boolean;
}

export const CharacterItemContainer = styled(motion.div)<ShowDetailsProps>`
  height: ${(props) => (props.showmoredetails ? '38rem' : '7rem')};
  background: rgba(255, 255, 255, 0.25);
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-wrap: wrap;

  transition: height 0.2s;

  & > button {
    align-self: center;
  }

  ${(props) =>
    props.showmoredetails &&
    `
    padding-top: 23rem;
    
    @media (max-width: 28rem) {
      padding-top: calc(3rem + 70vmin);
    }
  `};

  @media (max-width: 675px) {
    height: auto;
    flex-direction: column;
    align-items: center;
  }
`;

export const PixarizeWrapper = styled.div<{ show: boolean }>`
  width: 100%;
  height: 100%;
  font-size: 2rem;
  text-align: center;
  background: ${colors.pink}5A;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.show ? 1 : 0)};
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.2s;
`;

export const CharacterPortraitWrapper = styled.div<ShowDetailsProps & { ispixarized: boolean }>`
  width: ${(props) => (props.showmoredetails ? '20rem' : '5rem')};
  height: ${(props) => (props.showmoredetails ? '20rem' : '5rem')};
  border-radius: ${(props) => (props.showmoredetails ? '20rem' : '1rem')};
  margin-left: 0;
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;

  ${(props) =>
    props.showmoredetails &&
    `
    top: 2rem;
    left: 50%;
    margin-left: -10rem;
    position: absolute;
  `}

  ${(props) =>
    props.showmoredetails &&
    !props.ispixarized &&
    `
    cursor: pointer;
    
    &:hover > ${PixarizeWrapper} {
      opacity: 1;
    }
  `}

  transition: all 0.2s;

  ${(props) =>
    props.showmoredetails &&
    `
      @media (max-width: 28rem) {
        width: 70vmin;
        height: 70vmin;
        margin-left: -35vmin;
      }
  `}
`;
export const CharacterPortrait = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PixarizeItHint = styled(motion.div)`
  text-align: center;
  rotate: -25deg;
  position: absolute;
  top: 5rem;
  left: 50%;
  margin-left: -15rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > svg {
    height: 2rem;
    width: 2rem;
    margin-top: 2px;
    margin-right: -40px;
    rotate: 180deg;
  }

  @media (max-width: 615px) {
    width: 100%;
    opacity: 1;
    rotate: 0deg;
    margin-left: 0;
    left: 0;
    top: auto;
    margin-top: -4rem;

    & svg {
      display: none;
    }
  }
`;

export const CharacterName = styled.div`
  font-size: 1.6rem;
`;

export const CharacterData = styled(motion.div)<ShowDetailsProps>`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${(props) =>
    !props.showmoredetails &&
    `
    flex: 1;
  `};

  & svg {
    font-size: 1.3rem;
    margin-right: 0.3rem;
  }

  ${(props) =>
    props.showmoredetails &&
    `    
    & > ${CharacterName} {
      font-size: 2rem;
    }
    
    & > div {
      margin-bottom: 1rem;
    }
  `};

  @media (max-width: 675px) {
    margin: 1rem;

    & > div {
      margin-bottom: 5px;
    }
  }
`;

export const CharacterFamily = styled.div`
  display: flex;
  align-items: center;
`;

export const CharacterTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const ShowMoreDetailsData = styled(motion.div)`
  display: flex;
  flex: 1;

  & ${CharacterData} {
    height: 8rem;
    width: 30%;
    margin: 0 0 0 1rem;
  }

  @media (max-width: 675px) {
    flex-direction: column;

    & ${CharacterData} {
      width: 100%;
      margin: 1rem;
    }
  }
`;

export const Biography = styled.div`
  height: 15rem;
  text-align: justify;
  margin: 0 1rem 0 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;

  & > span {
    font-size: 1.7rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 675px) {
    margin: 0 1rem;
  }
`;

export const BiographyLoading = styled.div`
  color: ${colors.pink};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  & > ${LoaderWrapper} {
    flex: 0;
    margin-bottom: 0.5rem;
  }
`;
