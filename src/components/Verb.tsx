import React from "react";
import style from "@/styles/verb.module.scss";
import { Cookie } from "next/font/google";

const cookie = Cookie({
  subsets: ["latin"],
  weight: "400",
});

type propType =
  | {
      definitions: {
        definition: string;
        synonyms: string[];
        antonyms: string[];
      }[];
      partOfSpeech: string;
      synonyms: string[];
    }[]
  | undefined
  | null;

const Verb = ({ meanings }: { meanings: propType }) => {
  if(meanings?.length===0){
    return <h1>No meaning found</h1>;
  }
  return (
    <div className={style.wrapper}>
      <ul className={style.parentUl}>
        {meanings?.map((item,index) => (
          <li key={index}>
            <p className={`${cookie.className} ${style.type}`}>
              {item.partOfSpeech} <span className={style.line}></span>
            </p>
            <h3 className={style.meaning}>Meaning</h3>

            <ul className={style.list}>
              {item.definitions.map((meaning, index) => (
                <li key={index}>{meaning.definition}</li>
              ))}
            </ul>
            <h3 className={style.synonym}>
              Synonyms <span>{item.synonyms.join(" ")}</span>
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Verb;
