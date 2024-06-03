import React from "react";
import ToggleLang from "./ToggleLang";
import Logo from "./Logo";
import { useLocation } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full  fixed top-0 left-0 z-50 ">
      <div className="pr-10 flex justify-between">
        <Logo />
        <Nav />
        <ToggleLang />
      </div>
    </header>
  );
};

export default Header;

const Nav = () => {
   const pathname = useLocation();
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
    { id: 4,
      name: "Experience",
      href: "#experience" },
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
    <nav className="content-center">
      <ul className="flex auto gap-5 uppercase ">
        {navLinks.map((link) => (
          <li key={link.id} className={`hover:text-hover ${link.href === pathname.hash ? " lg:text-active" : ""}`}>
            <a
              href={link.href}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
