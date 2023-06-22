import { useState } from "react";
import Image from "next/image";

import Menu from "@/shared/assets/icons/menu.svg";

import { OptionRadio } from "./components/OptionRadio";
import { SearchBar } from "./components/SearchBar";

import { Container } from "./styles";

export function Sidebar() {
  const [actived, setActived] = useState(false);

  return (
    <Container>
      <div className="menu">
        <button onClick={() => setActived(!actived)}>
          <Image src={Menu} alt="" width={32} height={32} />
        </button>
      </div>

      {actived && (
        <>
          <SearchBar />

          <OptionRadio title="radio-name" isFavorited />
          <OptionRadio title="radio-name" />
          <OptionRadio title="radio-name" />
          <OptionRadio title="radio-name" isFavorited />
          <OptionRadio title="radio-name" isFavorited />
        </>
      )}
    </Container>
  );
}
