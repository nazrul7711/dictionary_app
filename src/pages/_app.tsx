import "@/styles/globals.css";
import { NextFont } from "@next/font";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import dicCtx from "@/context/dictionaryCtx";
import { useState } from "react";
import style from "@/styles/index.module.scss";

const roboto: NextFont = Roboto({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<boolean>(true);
  const [font, setFont] = useState<NextFont>(roboto);
  const toggleTheme = () => {
    setTheme((e) => !e);
  };

  const changeFont = (font: NextFont) => {
    setFont(font);
  };

  return (
    <dicCtx.Provider value={{ font, theme, toggleTheme, changeFont }}>
      <main className={`${font.className}`}>
        <Component {...pageProps} />
      </main>
    </dicCtx.Provider>
  );
}
