import Head from "next/head";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import Home from "./home";

interface ContextProps {
  urlRadioPlaying: string;
  setUrlRadioPlaying: Dispatch<SetStateAction<string>>;

  radioNamePlaying: string;
  setRadioNamePlaying: Dispatch<SetStateAction<string>>;

  menuActive: boolean;
  setMenuActive: Dispatch<SetStateAction<boolean>>;
}

export const Context = createContext<ContextProps>({
  menuActive: false,
  setMenuActive: () => {},

  radioNamePlaying: "",
  setRadioNamePlaying: () => {},

  urlRadioPlaying: "",
  setUrlRadioPlaying: () => {},
});

export default function Index() {
  const [menuActive, setMenuActive] = useState(false);
  const [urlRadioPlaying, setUrlRadioPlaying] = useState(
    "https://stream3.xdevel.com/audio6s975355-281/stream/icecast.audio"
  );

  const [radioNamePlaying, setRadioNamePlaying] = useState(
    "Radio Bruno Pentasport Fiorentina"
  );

  return (
    <Context.Provider
      value={{
        menuActive,
        setMenuActive,
        urlRadioPlaying,
        setUrlRadioPlaying,
        radioNamePlaying,
        setRadioNamePlaying,
      }}
    >
      <Head>
        <title>Radio Browser Web</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ height: "100%" }}>
        <Home />
      </main>
    </Context.Provider>
  );
}
