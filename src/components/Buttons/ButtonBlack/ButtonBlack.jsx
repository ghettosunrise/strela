import React from 'react';
import { BlackButton, BlackButtonLink } from './styles';

export const ButtonBlack = ({ txt, onClick, link, bgColor }) => (
  <>
    {link ? (
      <BlackButtonLink bgColor={bgColor} role="link" to={link}>
        {txt}
        <span />
      </BlackButtonLink>
    ) : (
      <BlackButton bgColor={bgColor} role="button" onClick={onClick}>
        {txt}
        <span />
      </BlackButton>
    )}
  </>
);

export default ButtonBlack;
