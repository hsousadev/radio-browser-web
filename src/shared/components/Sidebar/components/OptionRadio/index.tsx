import Check from "@/shared/assets/icons/check.svg";

import { Container } from "./styles";
import Image from "next/image";

interface OptionRadioProps {
  title: string;
  isFavorited?: boolean;
}

export function OptionRadio({ title, isFavorited }: OptionRadioProps) {
  return (
    <Container>
      <h4>{title}</h4>
      {isFavorited && (
        <Image src={Check} alt="Favorited" width={24} height={24} />
      )}
    </Container>
  );
}
