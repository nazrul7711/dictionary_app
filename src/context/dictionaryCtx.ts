import { NextFont } from "@next/font";
import { createContext } from "react";

export type DicCtxType = {
  font: NextFont;
  theme: boolean;
  toggleTheme:()=>void;
  changeFont:(font:NextFont)=>void;

};

let dicCtx = createContext<DicCtxType | null>(null);
export default dicCtx;
