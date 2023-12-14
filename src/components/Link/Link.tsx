import { Link as RouterLink } from 'react-router-dom';
import Button from '../Button/Button.tsx';
import { ReactNode } from 'react';

interface Props {
  to: string;
  type?: 'primary' | 'outline';
  size?: 'big' | 'small';
  children: ReactNode;
}

const Link = ({ to, type, size, children }: Props) => (
  <RouterLink to={to}>
    <Button type={type} size={size}>
      {children}
    </Button>
  </RouterLink>
);

export default Link;
