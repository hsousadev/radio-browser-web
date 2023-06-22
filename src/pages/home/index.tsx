import Image from "next/image";

import { Sidebar } from "@/shared/components/Sidebar";
import { RadioPlayer } from "./components/RadioPlayer";

import Search from "@/shared/assets/icons/search.svg";

import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Sidebar />
      <h1>Radio Browser</h1>

      <div className="info-head">
        <h4>Favorites Radios</h4>
        <button>
          <Image src={Search} alt="Seach Icon" width={28} height={28} />
          <h4>Search stations</h4>
        </button>
      </div>

      <RadioPlayer />
    </Container>
  );
}
