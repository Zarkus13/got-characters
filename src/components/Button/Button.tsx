import styled from 'styled-components';
import { colors } from '../../utils/colors.ts';
import { motion } from 'framer-motion';

interface Props {
  type?: 'primary' | 'outline';
  size?: 'big' | 'small';
}

const Button = styled(motion.button)<Props>`
  height: 2.5rem;
  color: white;
  font-size: 1rem;
  font-family: 'Concert One', sans-serif;
  padding: 0 1rem;
  border-radius: 10rem;
  box-sizing: border-box;
  cursor: pointer;

  ${(props) =>
    (props.type || 'primary') === 'primary' &&
    `
    background: ${colors.pink};
    border: none;
    box-shadow: 0px 10px 15px -3px ${colors.pinkShadow};
    transition: all 0.2s;
    
    &:hover {
      background: ${colors.pinkDark};
    }
  `}

  ${(props) =>
    (props.type || 'primary') === 'outline' &&
    `
    background: transparent;
    border: 0.1rem solid white;
    transition: all 0.07s;
    
    &:hover {
      border: 0.2rem solid white;
    }
  `}
`;

export default Button;
