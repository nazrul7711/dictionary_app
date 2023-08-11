import React, { useState, useContext, ChangeEvent } from "react";
import style from "@/styles/navbar.module.scss";
import Image from "next/image";
import dicCtx from "@/context/dictionaryCtx";
import { DicCtxType } from "@/context/dictionaryCtx";
import {
  Roboto,
  Dancing_Script,
  Preahvihear,
  Noto_Serif,
} from "next/font/google";
import { NextFont } from "@next/font";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400"],
});

const dancing: NextFont = Dancing_Script({
  subsets: ["latin"],
  weight: ["400"],
});
const preahvihear: NextFont = Preahvihear({
  subsets: ["latin"],
  weight: ["400"],
});
const noto_serif: NextFont = Noto_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

const Navbar = () => {
  let { theme, changeFont, toggleTheme } = useContext(dicCtx) as DicCtxType;
  function fontchangeHandler(e: ChangeEvent<HTMLSelectElement>) {
    let fonts: { [index: string]: NextFont } = {
      "noto-serif": noto_serif,
      roboto: roboto,
      preahvihear: preahvihear,
      dancing: dancing,
    };
    const selectedFont = fonts[e.target.value] || dancing;
    changeFont(selectedFont);
  }

  return (
    <div className={style.wrapper}>
      <div>
        <Image
          src={"/dictionary.svg"}
          alt={"dictionary"}
          height={30}
          width={30}
        />
      </div>
      <div className={style.theme}>
        <select onChange={fontchangeHandler} defaultValue={"roboto"}>
          <option value="noto-serif">Serif</option>
          <option value="roboto">Roboto</option>
          <option value="preahvihear">Preahvihear</option>
          <option value="dancing">Dancing Script</option>
        </select>
        <label className={style.switch}>
          <input
            type="checkbox"
            defaultChecked={theme}
            onClick={() => toggleTheme()}
          />
          <span></span>
        </label>
        <div>
          {theme ? (
            <Image
              src={"/sun-svgrepo-com.svg"}
              alt="sun"
              height={50}
              width={50}
            />
          ) : (
            <Image
              className={style.moon}
              src={"/half_moon.svg"}
              alt="moon"
              height={50}
              width={50}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

//context code
/*
objType={
  name:string,
  save:()=>void
}
surname="seeta"
let actualSave = (naman)=>console.log(naman)
let ctx = createContext<objType|null>(null)
ctx.provider vakue={{actualSave,surname}}
let {actualSave} = useContext(ctx)



*/
