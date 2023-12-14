import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HomeContainer = styled(motion.div)`
  height: 100vh;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);

  & a {
    color: white;
  }
`;

export const HomeTitle = styled.div`
  font-size: 12vmin;
  margin-bottom: 10vmin;
`;

export const SiteDescription = styled.div`
  font-size: 1.5rem;
  margin-bottom: 5vmin;

  & > small {
    font-size: 1rem;
  }
`;
