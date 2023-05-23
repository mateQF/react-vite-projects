import { createContext, useState } from "react";

// 1. Create the context, this is the context we are going to consume
export const FiltersContext = createContext();

// 2. Create the Provider in order to provide the context, it provides us the access
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  return (
    <FiltersContext.Provider
      // 3. What we are going to consume
      value={{filters, setFilters}}
    >
      {children}
    </FiltersContext.Provider>
  );
}
