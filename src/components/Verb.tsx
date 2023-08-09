import React from "react";
import style from "@/styles/verb.module.scss";
import { Cookie } from "next/font/google";

const cookie = Cookie({
  subsets: ["latin"],
  weight: "400",
});

type propType = {
  type: string;
  meanings: string[];
  synonym?: string;
};

const Verb = ({ type, meanings, synonym }: propType) => {
  return (
    <div className={style.wrapper}>
      <p className={`${cookie.className} ${style.type}`}>
        Hello <span className={style.line}></span>
      </p>
      <h3 className={style.meaning}>Meaning</h3>
      
      <ul className={style.list}>
        {meanings.map((meaning, index) => (
          <li key={index}>{meaning}</li>
        ))}
      </ul>
      {synonym && (
        <h3 className={style.synonym}>
          Synonyms <span >{synonym}</span>
        </h3>
      )}
    </div>
  );
};

export default Verb;
