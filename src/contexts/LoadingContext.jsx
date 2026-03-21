import { createContext, useContext, useState } from "react";

const LoadingContext = createContext();

function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const startLoading = () => setIsLoading(true);
  const endLoading = () => setIsLoading(false);

  //! CONTEXT VALUE
  const contextValue = {
    isLoading,
    startLoading,
    endLoading,
  };

  return (
    <LoadingContext.Provider value={contextValue}>
      {children}
    </LoadingContext.Provider>
  );
}

function useLoadingFunction() {
  return useContext(LoadingContext);
}

export { LoadingProvider, useLoadingFunction };
