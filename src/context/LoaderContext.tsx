// context/LoaderContext.js
import React, { createContext, useContext, useState } from "react";

const LoaderContext = createContext(
  {} as {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  }
);

export const useLoader = () => useContext(LoaderContext);

interface LoaderProviderProps {
  children: React.ReactNode;
}

export const LoaderProvider = ({ children }: LoaderProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};
