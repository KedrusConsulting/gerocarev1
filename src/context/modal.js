import React, { createContext, useState } from "react";

export const ModalContext = createContext({});

const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    console.log("open");
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ModalContext.Provider value={{ open, handleOpen, handleClose }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
