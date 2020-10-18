import React from 'react';
import { ProvideLanguage, useLanguage } from '../../hooks';

const RootLayout = ({ children }) => {
  const [[language, setLanguage]] = useLanguage();

  return (
    <>
      <ProvideLanguage language={language}>{children}</ProvideLanguage>
    </>
  );
};

export default RootLayout;
