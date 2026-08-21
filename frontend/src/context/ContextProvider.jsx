/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import { api } from "../axios";

export const CreatorContext = createContext();

export function ContextProvider({ children }) {
  const [creators, setCreators] = useState([]);
  const [categories, setCategories] = useState([]);
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
    async function getCreators() {
      try {
        const response = await api.get("/creators");
        setCreators(response.data);
        setCategories([
          ...new Set(response.data.map((creator) => creator.category)),
        ]);
      } catch (error) {
        console.error(error);
      }
    }
    getCreators();
  }, []);

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
        creators,
        categories,
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
