import React, { useState } from 'react';

export const useAnimationStatus = React.createContext();

const Provider = props => {
  const [animationStatus, setAnimationStatus] = useState('visited');

  return (
    <useAnimationStatus.Provider
      value={{
        animationStatus,
        setStatus: el => setAnimationStatus(el),
      }}
    >
      {props.children}
    </useAnimationStatus.Provider>
  );
};

export default ({ element }) => <Provider>{element}</Provider>;
