import React from 'react';
import './src/assets/layout.css';
import { ProvideLanguage } from './src/hooks/useLanguage';

export const wrapRootElement = ({ element }) => (
  <ProvideLanguage>{element}</ProvideLanguage>
);
