import React from "react";
import style from "@/styles/pronunciation.module.scss";

const Pronounciation = ({
  input,
  phonetic,
  audio,
}: {
  input: string | undefined;
  phonetic: string | null;
  audio: string | undefined;
}) => {
  function audioHandler(src: string) {
    let audio = new Audio(src);
    audio.play();
  }
  return (
    <div className={style.wrapper}>
      <div>
        <h1>{input}</h1>
        <h3>{phonetic}</h3>
      </div>
      <div>
        {audio && (
          <button
            className={style.audio}
            onClick={() => audioHandler(audio)}
          ></button>
        )}
      </div>
    </div>
  );
};

export default Pronounciation;
