import ReactAudioPlayer from "react-audio-player";

import Image from "next/image";
import RadioItem from "./components/RadioItem";
import SquarePause from "@/shared/assets/icons/square-pause.svg";
import SquarePlay from "@/shared/assets/icons/square-play.svg";
import { Container } from "./styles";
import { useContext, useEffect, useState } from "react";
import { Context } from "@/pages";
import { OptionRadioProps } from "@/shared/types/OptionRadioProps";

interface RadioPlayerProps {
  name: string;
  favorites: Array<OptionRadioProps>;
}

export default function RadioPlayer({ name, favorites }: RadioPlayerProps) {
  const { urlRadioPlaying } = useContext(Context);

  const [audioSource, setAudioSource] = useState(urlRadioPlaying);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setAudioSource(urlRadioPlaying);
    setIsLoading(true);
  }, [urlRadioPlaying]);

  function handlePlay() {
    setIsPlaying(!isPlaying);
  }

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Container>
      <div className="playing">
        <button onClick={() => handlePlay()}>
          {isPlaying ? (
            <Image src={SquarePause} alt="" width={28} height={28} />
          ) : (
            <Image src={SquarePlay} alt="" width={28} height={28} />
          )}
        </button>
        {isPlaying && (
          <ReactAudioPlayer
            src={audioSource}
            autoPlay
            controls
            onCanPlay={() => setIsLoading(false)}
          />
        )}
        {isLoading && <h2>Loading...</h2>}
        <h2>{name}</h2>
      </div>

      <div className="radio-list">
        {favorites?.map((item: OptionRadioProps, index: number) => (
          <RadioItem
            key={index}
            name={item.name}
            country={item.country}
            url={item.url}
          />
        ))}
      </div>
    </Container>
  );
}
