import styled from 'styled-components';
import { colors } from '../../utils/colors.ts';
import { motion } from 'framer-motion';

export const CharactersListContainer = styled(motion.div)`
  width: 100%;
  max-width: 1000px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
  color: white;
  margin: 0 auto;

  & .infinite-scroll-component {
    overflow: visible !important;
    overflow-x: visible;
    overflow-y: auto;
  }
`;

export const Header = styled.div`
  height: 3rem;
  font-size: 20px;
  position: fixed;
  top: 0;
  margin-left: -5rem;
  display: flex;
  align-items: center;
  z-index: 100;

  @media (max-width: 1270px) {
    width: 100%;
    background-color: ${colors.blueDark};
    margin-left: 1rem;
    left: 0;
  }

  & > a {
    color: white;
    text-decoration: none;

    & > svg {
      height: 0.8rem;
    }
  }
`;

export const Title = styled.div`
  font-size: 10vmin;
  text-align: center;
  padding: 3rem 0;
`;
