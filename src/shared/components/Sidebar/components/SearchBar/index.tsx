/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, Dispatch, SetStateAction, KeyboardEvent } from "react";
import { Container } from "./styles";
import { Context } from "@/pages";

interface SearchBarProps {
  searchChanged: boolean;
  setSearchChanged: Dispatch<SetStateAction<boolean>>;
}

export function SearchBar({ setSearchChanged, searchChanged }: SearchBarProps) {
  const { setSearchingRadio } = useContext(Context);

  function handleInputKeyPress(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      setSearchChanged(!searchChanged);
      return;
    }
  }

  return (
    <Container>
      <input
        onKeyDown={(e) => handleInputKeyPress(e)}
        onChange={(e) => setSearchingRadio(e.target.value)}
        type="text"
        placeholder="Search here"
      />
    </Container>
  );
}
