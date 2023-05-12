import React, { createContext, useState } from "react";

export const ProgressContext = createContext({});

const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(0);

  const currentProgress = (value) => {
    if (value === 0) {
      setProgress(100 / 3);
    }

    if (value === 1) {
      setProgress((100 / 3) * 2);
    }

    if (value === 2) {
      setProgress((100 / 3) * 3);
    }
  };
  return (
    <ProgressContext.Provider value={{ progress, currentProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

export default ProgressProvider;
