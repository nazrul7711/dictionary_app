import React from 'react'
import style from "@/styles/pronunciation.module.scss"

const Pronounciation = ({input}:{input:string|undefined}) => {
  return (
    <div className={style.wrapper}>
      <div>
        <h1>{input}</h1>
      </div>
      <div>
        <button></button>
      </div>
    </div>
  );
}

export default Pronounciation