"use client";

import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import React, { useContext } from "react";

const ThemToggle = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className="w-12 h-6 rounded-full cursor-pointer flex bg-themeColor-dark items-center justify-between relative">
        <Image src="/img/moon.png" width={16} height={16} alt="moon" />
        <div className="ball w-5 h-5 rounded-full bg-themeColor-light absolute left-0.5"></div>
        <Image src="/img/sun.png" width={16} height={16} alt="sun" />
      </div>
    </>
  );
};

export default ThemToggle;
