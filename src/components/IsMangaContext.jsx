import React, { createContext, useState } from 'react';


export const IsMangaContext = createContext();


export const IsMangaProvider = ({ children }) => {
  const [isManga, setIsManga] = useState(false);

  return (
    <IsMangaContext.Provider value={{ isManga, setIsManga }}>
      {children}
    </IsMangaContext.Provider>
  );
};
