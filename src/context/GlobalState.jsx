import { createContext, useState } from "react";

// ✅ React 19 context with modern pattern
export const GeneralContext = createContext(null);

export function GeneralProvider({ children }) {
  const [general, setGeneral] = useState({});

  const value = { general, setGeneral };

  return (
    <GeneralContext.Provider value={value}>
      {children}
    </GeneralContext.Provider>
  );
}

export default GeneralProvider;

