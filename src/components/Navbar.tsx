import React, { useState } from "react";
import style from "@/styles/navbar.module.scss"
import Image from "next/image";

const Navbar = () => {
  const [toggle,setToggle] = useState<boolean>(false)
  function toggleHandler(){
    setToggle((t)=>!t)
  }
  return (
    <div>
      <div></div>
      <div>
        <select name="" id="">
          <option value="serif">Serif</option>
          <option value="roboto">Roboto</option>
          <option value="preahvihear">Preahvihear</option>
          <option value="dancing">Dancing Script</option>
        </select>
        <label className={style.switch}>
          <input
            type="checkbox"
            defaultChecked={toggle}
            onClick={toggleHandler}
          />
          <span className={style.slider}></span>
        </label>
        <div style={{height:"100px",width:"100px"}}>
          {toggle ? (
            <Image src={"/moon.svg"} alt="moon" height={50} width={50} />
          ) : (
            <Image src={"/sun-svgrepo-com.svg"} alt="sun" height={50} width={50} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
