/* eslint-disable react-hooks/exhaustive-deps */
import Check from "@/shared/assets/icons/check.svg";

import { Container } from "./styles";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { Context } from "@/pages";
import { OptionRadioProps } from "@/shared/types/OptionRadioProps";

interface OptionRadioItemProps {
  name: string;
  country: string;
  onClick?: () => void;
  url?: string;
}

export function OptionRadio({
  name,
  country,
  url,
  onClick,
}: OptionRadioItemProps) {
  const { setFavoriteRadioList, favoriteRadioList } = useContext(Context);

  const [isFavorited, setIsFavorited] = useState(false);

  const object = {
    name,
    country,
    url,
  };

  function handleAddFavorite() {
    setIsFavorited(!isFavorited);

    const storedFavorites = localStorage.getItem("favoriteRadioList");
    const parsedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];

    const newFavorites = [...parsedFavorites, object];

    localStorage.setItem("favoriteRadioList", JSON.stringify(newFavorites));
    setFavoriteRadioList(newFavorites);
  }

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteRadioList");
    const parsedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];

    if (
      parsedFavorites.some(
        (item: OptionRadioProps) =>
          JSON.stringify(item) === JSON.stringify(object)
      )
    ) {
      setIsFavorited(true);
    } else {
      setIsFavorited(false);
    }
  }, [isFavorited, favoriteRadioList]);

  return (
    <Container onClick={onClick}>
      <div className="option-content">
        {name.length ? (
          <h4>{name.slice(0, 25)}</h4>
        ) : (
          <h4>
            Nameless radio (
            {country.length > 20 ? country.slice(0, 12) + "..." : country} )
          </h4>
        )}

        {!isFavorited && (
          <button className="secondBtn" onClick={() => handleAddFavorite()}>
            <Image src={Check} alt="Favorited" width={24} height={24} />
          </button>
        )}
      </div>
    </Container>
  );
}
