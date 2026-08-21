/* eslint-disable react-refresh/only-export-components */
import { useContext } from "react";
import { AddCreatorContext } from "../AdminContextProvider";

export function ContentCategory({ value, name }) {
  const { handleChange } = useContext(AddCreatorContext);

  return (
    <label>
      <input
        className="w-2 opacity-80"
        type="radio"
        name="category"
        value={value}
        onChange={handleChange}
      />
      <span className="ml-2 text-xs">{name}</span>
    </label>
  );
}

export const contentCategories = [
  { name: "Dancer", value: "dancer" },
  { name: "Vlogger", value: "vlogger" },
  { name: "Influencer", value: "influencer" },
  { name: "Musician", value: "musician" },
  { name: "Comedian", value: "comedian" },
];
