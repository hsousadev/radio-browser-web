import Image from "next/image";

import Play from "@/shared/assets/icons/play.svg";
import Edit from "@/shared/assets/icons/edit.svg";
import Trash from "@/shared/assets/icons/trash.svg";

import { Container } from "./styles";

interface RadioItemProps {
  title: string;
  info: string;
}

export function RadioItem({ title, info }: RadioItemProps) {
  return (
    <Container>
      <div className="info">
        <button>
          <Image src={Play} alt="" width={48} height={48} />
        </button>
        <div>
          <h2>{title}</h2>
          <h4>{info}</h4>
        </div>
      </div>

      <div className="options">
        <button>
          <Image src={Edit} alt="" width={28} height={28} />
        </button>
        <button>
          <Image src={Trash} alt="" width={28} height={28} />
        </button>
      </div>
    </Container>
  );
}
