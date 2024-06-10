import React, { useState } from 'react';
import "../../lib/i18/i18n.js";
import i18next from 'i18next';
import { motion } from "framer-motion";


const spring = {
  type: "spring",
  stiffness: 500,
  damping: 15,
};

const ToggleLang = ({ burgerMenu }) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    if (!isOn) {
      i18next.changeLanguage("uk");
    } else i18next.changeLanguage("en");
  };

  return (
    <div
      className={`flex items-center ${burgerMenu ? "tablet:hidden justify-end" : " block justify-center "}`}
    >
      <label htmlFor="switch" className="flex items-center cursor-pointer relative">
        <input
          type="checkbox"
          id="switch"
          className="sr-only"
          checked={isOn}
          onChange={toggleSwitch}
        />

        <div className="  w-11 h-5 bg-active rounded-full shadow-inner transition-all " />
        <motion.span
          layout
          transition={spring}
          initial={false}
          animate={{ x: isOn ? 24 : 4 }}
          className={`absolute w-4 h-4  bg-hover rounded-full shadow  ${
            isOn ? "translate-x-6" : "translate-x-1"
          }`}
        ></motion.span>
        <span className="ml-3 font-medium text-text ">{isOn ? "EN" : "UA"}</span>
      </label>
    </div>
  );
};

export default ToggleLang;