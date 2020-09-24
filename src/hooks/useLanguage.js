import React, { useState, createContext, useContext } from 'react';

const languageContext = createContext([[{}, () => {}]]);

const useLanguage = () => useContext(languageContext);

export const ProvideLanguage = ({ children }) => {
  const [language, setLanguage] = useState('RUS');

  return (
    <languageContext.Provider value={[[language, setLanguage]]}>
      {children}
    </languageContext.Provider>
  );
};

export default useLanguage;
