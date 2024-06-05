import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../lib/i18/i18n.js";
import useBodyOverflow from "../../hooks/useBodyOverflow.jsx";

import ToggleLang from "./ToggleLang";
import Logo from "../common/Logo";
import ButtonBurger from "../common/ButtonBurger";

const Header = () => {
  const [burgerMenu, setBurgerMenu] = useState(!false);
  const handleBurgerButtonClick = () => {
    setBurgerMenu(!burgerMenu);
  };

  useBodyOverflow(!burgerMenu);

  return (
    <header
      className={` w-full  fixed top-0 left-0 z-50  ${burgerMenu ? "" : "h-screen bg-indigo-950 text-2xl "}`}
    >
      <div className={`  pr-10 pl-10  justify-between ${burgerMenu ? "flex" : ""}`}>
        <Logo />
        <Nav burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
        <ToggleLang burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
        <ButtonBurger handleBurgerButtonClick={handleBurgerButtonClick} burgerMenu={burgerMenu} />

        {/* <button className="" onClick={burgerButton}>
          X
        </button> */}
      </div>
    </header>
  );
};

export default Header;

const Nav = ({ burgerMenu, setBurgerMenu }) => {
  const pathname = useLocation();
  const { t } = useTranslation();
  const navLinks = [
    {
      id: 1,
      name: "Home",
      href: "#home",
    },
    {
      id: 2,
      name: "About",
      href: "#about",
    },
    {
      id: 3,
      name: "Skills",
      href: "#skills",
    },
    {
      id: 4,
      name: "Experience",
      href: "#experience",
    },
    {
      id: 5,
      name: "Projects",
      href: "#projects",
    },
    {
      id: 6,
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <nav className={`content-center  ${burgerMenu ? "tablet:hidden" : "block"}`}>
      <ul
        className={` ${burgerMenu ? "" : "flex-col items-center justify-center m-auto px-6 py-6"} flex auto gap-5 uppercase `}
      >
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={` hover:text-hover ${link.href === pathname.hash ? " text-active" : ""}`}
          >
            <a href={link.href}>{t(link.name)}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
