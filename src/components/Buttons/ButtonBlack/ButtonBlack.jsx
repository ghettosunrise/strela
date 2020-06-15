import React from 'react';
import { BlackButton, BlackButtonLink } from './styles';

export const ButtonBlack = ({ txt, onClick, link }) => (
  <>
    {link ? (
      <BlackButtonLink to={link}>
        {txt}
        <span />
      </BlackButtonLink>
    ) : (
      <BlackButton onClick={onClick}>
        {txt}
        <span />
      </BlackButton>
    )}
  </>
);

export default ButtonBlack;
