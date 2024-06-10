import React from 'react'

const ButtonBurger = ({ handleBurgerButtonClick, burgerMenu }) => {
  return (
    <div className="tablet:block burger-btn:hidden fixed top-0 right-0 pr-3 pt-3">
      <button onClick={handleBurgerButtonClick} className="relative group">
        <div
          className={`relative flex items-center justify-center rounded-full w-[40px] h-[40px] transform transition-all bg-slate-700 ring-0  ${burgerMenu ? "" : "ring-4"} ring-opacity-30 duration-200 shadow-md`}
        >
          <div
            className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 ${burgerMenu ? "" : "-rotate-[45deg]"} origin-center`}
          >
            <div
              className={`bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 ${burgerMenu ? "" : "-rotate-90 h-[1px] -translate-y-[1px]"} origin-right delay-75`}
            ></div>
            <div className="bg-white h-[1px] rounded"></div>
            <div
              className={`bg-white h-[2px] w-1/2 rounded self-end transform transition-all duration-300 ${burgerMenu ? "" : "-rotate-90 h-[1px] translate-y-[1px]"} origin-left delay-75`}
            ></div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default ButtonBurger