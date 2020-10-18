import React from 'react';
import { ProvideLanguage } from './src/hooks/useLanguage';

export const wrapRootElement = ({ element }) => (
  <ProvideLanguage>{element}</ProvideLanguage>
);
