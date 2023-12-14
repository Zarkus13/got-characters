import styled from 'styled-components';
import { colors } from '../../utils/colors.ts';

export const TemplateContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(
    180deg,
    ${colors.blueDark} 3rem,
    ${colors.blue} 23vh,
    ${colors.blue} 75vh,
    ${colors.blue} 100vh
  );
  background-attachment: fixed;
`;

export const ThroneImg = styled.img<{ show: boolean }>`
  height: 50vh;
  position: fixed;
  top: 25vh;
  left: 50%;
  margin-left: -25vh;
  opacity: ${(props) => (props.show ? 0.7 : 0.2)};
  z-index: 0;

  transition: all 0.5s;
`;

export const TemplateContent = styled.div`
  width: 100%;
  max-width: 1500px;
  box-sizing: border-box;
  padding: 0 1rem;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;
