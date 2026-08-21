/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

export const CreatorContext = createContext();

export function ContextProvider({ children }) {
  const [selectedCreators, setSelectedCreators] = useState(
    JSON.parse(localStorage.getItem("selectedCreators")) || [],
  );

  const [selectedCategories, setSelectedCategories] = useState(
    JSON.parse(localStorage.getItem("selectedCategories")) || [],
  );
  
  const [isClicked, setIsClicked] = useState(
    JSON.parse(localStorage.getItem("isClicked")) || [],
  );

  useEffect(() => {
    localStorage.setItem("isClicked", JSON.stringify(isClicked));
  }, [isClicked]);

  useEffect(() => {
    localStorage.setItem("selectedCreators", JSON.stringify(selectedCreators));
    localStorage.setItem(
      "selectedCategories",
      JSON.stringify(selectedCategories),
    );
  }, [selectedCreators, selectedCategories]);

  return (
    <CreatorContext.Provider
      value={{
        selectedCreators,
        setSelectedCreators,
        selectedCategories,
        setSelectedCategories,
        isClicked,
        setIsClicked,
      }}
    >
      {children}
    </CreatorContext.Provider>
  );
}
