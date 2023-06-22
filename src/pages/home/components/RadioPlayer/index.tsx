import Image from "next/image";

import { RadioItem } from "./components/RadioItem";

import SquarePause from "@/shared/assets/icons/square-pause.svg";

import { Container } from "./styles";

interface RadioPlayerProps {
  playingRadio: string;
}

export function RadioPlayer({ playingRadio }: RadioPlayerProps) {
  return (
    <Container>
      <div className="playing">
        <button>
          <Image src={SquarePause} alt="" width={28} height={28} />
        </button>
        <h2>{playingRadio}</h2>
      </div>

      <div className="radio-list">
        <RadioItem title="Sertanejo Brasil" info="Brasil, RJ" />
        <RadioItem title="Sertanejo Brasil" info="Brasil, RJ" />
        <RadioItem title="Sertanejo Brasil" info="Brasil, RJ" />
        <RadioItem title="Sertanejo Brasil" info="Brasil, RJ" />
      </div>
    </Container>
  );
}
