import { useContext, useEffect, useState } from "react";
import Image from "next/image";

import { Context } from "@/pages";
import Menu from "@/shared/assets/icons/menu.svg";

import { OptionRadio } from "./components/OptionRadio";
import { SearchBar } from "./components/SearchBar";

import { Container } from "./styles";

export function Sidebar() {
  const { menuActive, setMenuActive, setUrlRadioPlaying, setRadioNamePlaying } =
    useContext(Context);
  const [data, setData] = useState([]);

  async function requestData() {
    const request = await fetch("http://localhost:3000/radios");
    const data = await request.json();
    setData(data);
  }

  useEffect(() => {
    requestData();
  }, []);

  function handleRadioClick(item: any) {
    setUrlRadioPlaying(item.url);
    setRadioNamePlaying(item.name);
  }

  return (
    <Container>
      <div className="menu">
        <button onClick={() => setMenuActive(!menuActive)}>
          <Image src={Menu} alt="" width={32} height={32} />
        </button>
      </div>

      {menuActive && (
        <>
          <SearchBar />

          {data.map((item: any, index: number) => (
            <OptionRadio
              key={index}
              title={item?.name}
              isFavorited
              onClick={() => handleRadioClick(item)}
            />
          ))}
        </>
      )}
    </Container>
  );
}
