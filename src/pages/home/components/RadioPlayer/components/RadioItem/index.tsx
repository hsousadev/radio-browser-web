import Image from "next/image";

import Play from "@/shared/assets/icons/play.svg";
import Edit from "@/shared/assets/icons/edit.svg";
import Trash from "@/shared/assets/icons/trash.svg";
import EditCheck from "@/shared/assets/icons/edit-check.svg";

import { Container } from "./styles";
import { OptionRadioProps } from "@/shared/types/OptionRadioProps";
import { useContext, useState } from "react";
import { Context } from "@/pages";

export default function RadioItem({ name, country, url }: OptionRadioProps) {
  const { setFavoriteRadioList, setUrlRadioPlaying, setRadioNamePlaying } =
    useContext(Context);

  const [edition, setEdition] = useState(false);

  const [newRadioName, setNewRadioName] = useState("");
  const [newRadioInfo, setNewRadioInfo] = useState("");

  let object = {
    name,
    country,
  };

  function handleRemoveFavorite() {
    const storedFavorites = localStorage.getItem("favoriteRadioList");
    const parsedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];

    const updatedFavorites = parsedFavorites.filter(
      (favorite: OptionRadioProps) => {
        return (
          favorite.name !== object.name || favorite.country !== object.country
        );
      }
    );

    localStorage.setItem("favoriteRadioList", JSON.stringify(updatedFavorites));
    setFavoriteRadioList(updatedFavorites);
  }

  function handleEditFavorite() {
    const storedFavorites = localStorage.getItem("favoriteRadioList");
    const parsedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];

    const updatedFavorites = parsedFavorites.map(
      (favorite: OptionRadioProps) => {
        if (
          favorite.name === object.name &&
          favorite.country === object.country
        ) {
          return {
            name: newRadioName,
            country: newRadioInfo,
            url: url,
          };
        }
        return favorite;
      }
    );

    localStorage.setItem("favoriteRadioList", JSON.stringify(updatedFavorites));
    setFavoriteRadioList(updatedFavorites);
    setEdition(false);
  }

  function handlePlayRadio() {
    if (url) {
      setUrlRadioPlaying(url);
    }
    setRadioNamePlaying(name);
  }

  return (
    <Container>
      <div className="info">
        <button onClick={() => handlePlayRadio()}>
          <Image src={Play} alt="" width={48} height={48} />
        </button>
        {edition ? (
          <div className="edition-inputs">
            <input
              onChange={(e) => setNewRadioName(e.target.value)}
              type="text"
              placeholder={name}
              maxLength={25}
            />
            <input
              onChange={(e) => setNewRadioInfo(e.target.value)}
              type="text"
              placeholder={country}
              maxLength={25}
            />
          </div>
        ) : (
          <div>
            <h2>{name}</h2>
            <h4>{country}</h4>
          </div>
        )}
      </div>

      <div className="options">
        {edition ? (
          <button onClick={() => handleEditFavorite()}>
            <Image src={EditCheck} alt="" width={28} height={28} />
          </button>
        ) : (
          <button onClick={() => setEdition(true)}>
            <Image src={Edit} alt="" width={28} height={28} />
          </button>
        )}

        <button onClick={() => handleRemoveFavorite()}>
          <Image src={Trash} alt="" width={28} height={28} />
        </button>
      </div>
    </Container>
  );
}
