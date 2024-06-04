import React, { useState } from 'react';
import "../../lib/i18/i18n.js";
import i18next from 'i18next';

const ToggleLang = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
     if (!isOn) {
       i18next.changeLanguage('uk');
     } else i18next.changeLanguage("en");
  };






  return (
    <div className="flex items-center justify-center">
      <label htmlFor="switch" className="flex items-center cursor-pointer relative">
        <input
          
          type="checkbox"
          id="switch"
          className="sr-only"
          checked={isOn}
          onChange={toggleSwitch}
        />

        <div
          className={`w-12 h-6 bg-active rounded-full shadow-inner transition-all ${
            isOn ? "bg-green-500" : ""
          }`}
        ></div>
        <span
          className={`absolute w-5 h-5  bg-[#FFDB00] rounded-full shadow transition-transform ${
            isOn ? "translate-x-6" : "translate-x-1"
          }`}
        ></span>
        <span className=" ml-3 font-medium text-text">{isOn ? "EN" : "UA"}</span>
      </label>
    </div>
  );
};

export default ToggleLang;