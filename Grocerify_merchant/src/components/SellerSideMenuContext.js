import React, { createContext, useContext, useState } from 'react';

const SellerSideMenuContext = createContext();

export const SellerSideMenuProvider = ({ children }) => {
  const [isSellerSideMenuOpen, setIsSellerSideMenuOpen] = useState(false);

  const toggleSellerSideMenu = () => {
    setIsSellerSideMenuOpen((prevState) => !prevState);
  };

  return (
    <SellerSideMenuContext.Provider value={{ isSellerSideMenuOpen, toggleSellerSideMenu }}>
      {children}
    </SellerSideMenuContext.Provider>
  );
};

export const useSellerSideMenu = () => {
  const context = useContext(SellerSideMenuContext);
  if (!context) {
    throw new Error('useSellerSideMenu must be used within a SellerSideMenuProvider');
  }
  return context;
};
