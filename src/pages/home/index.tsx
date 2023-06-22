import { useContext } from "react";
import Image from "next/image";

import { Context } from "..";

import { Sidebar } from "@/shared/components/Sidebar";
import RadioPlayer from "./components/RadioPlayer";

import Search from "@/shared/assets/icons/search.svg";

import { Container } from "./styles";

export default function Home() {
  const { menuActive, setMenuActive, radioNamePlaying } = useContext(Context);

  return (
    <Container>
      <Sidebar />
      <div className="content">
        <h1>Radio Browser</h1>

        <div className="info-head">
          <h4>FAVORITE RADIOS</h4>
          <button onClick={() => setMenuActive(!menuActive)}>
            <Image src={Search} alt="Seach Icon" width={28} height={28} />
            <h4>Search stations</h4>
          </button>
        </div>

        <RadioPlayer name={radioNamePlaying} />
      </div>
    </Container>
  );
}
