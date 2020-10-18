import React from 'react';
import { BlackButton, BlackButtonLink } from './styles';

export const ButtonBlack = ({ txt, onClick, link }) => (
  <>
    {link ? (
      <BlackButtonLink role="link" to={link}>
        {txt}
        <span />
      </BlackButtonLink>
    ) : (
      <BlackButton role="button" onClick={onClick}>
        {txt}
        <span />
      </BlackButton>
    )}
  </>
);

export default ButtonBlack;
