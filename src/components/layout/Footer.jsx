import React from "react";
import {Link} from "react-router-dom";

import { ReactComponent as XIcon} from "../../assets/images/footer/X.svg";
import { ReactComponent as TelegramIcon } from "../../assets/images/footer/telegram.svg";
import { ReactComponent as FacebookIcon } from "../../assets/images/footer/facebook.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/images/footer/linkedin.svg";
import { ReactComponent as InstagramIcon } from "../../assets/images/footer/instagram.svg";


const iconStyles =
  "w-6 h-6 fill-footer hover:fill-icon-color-hover stroke-black hover:stroke-icon-stroke-hover";


const SocialLinks = [
  {
    id: 1,
    name: "X",
    icon: <XIcon className={iconStyles} />,
    href: "/x.com",
  },
  {
    id: 2,
    name: "linkedin",
    icon: <LinkedinIcon className={iconStyles} />,
    href: "/linkedin",
  },
  {
    id: 3,
    name: "facebook",
    icon: <FacebookIcon className={iconStyles} />,
    href: "#contact",
  },
  {
    id: 4,
    name: "telegram",
    icon: <TelegramIcon className={iconStyles} />,
    href: "/telegram.com",
  },
  {
    id: 5,
    name: "inst",
    icon: <InstagramIcon className={iconStyles} />,
    href: "/instagram.com",
  },
];

const Footer = () => {
  return (
    <footer className="w-full  h-10 text-lg bg-back pt-2">
      <div className="container flex justify-between items-center gap-10  ">
        <p className="border-8 border-black  caption lg:block text-footer">© 2024. All rights reserved.</p>
        <ul className="flex gap-6 flex-wrap">
          {SocialLinks.map((link) => (
            <li key={link.id} className="hover:scale-110  transition-transform  ">
              <Link to={link.href}>{link.icon}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
