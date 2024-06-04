import React from "react";
import {Link} from "react-router-dom";

import { ReactComponent as XIcon} from "../../assets/images/footer/X.svg";
import { ReactComponent as TelegramIcon } from "../../assets/images/footer/telegram.svg";
import { ReactComponent as FacebookIcon } from "../../assets/images/footer/facebook.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/images/footer/linkedin.svg";
import { ReactComponent as InstagramIcon } from "../../assets/images/footer/instagram.svg";

const LinkFooter = [
  {
    id: 1,
    name: "X",
    icon: <XIcon className="w-6 h-6" />,
    href: "/x.com",
  },
  {
    id: 2,
    name: "linkedin",
    icon: <LinkedinIcon className="w-6 h-6" />,
    href: "/linkedin",
  },
  {
    id: 3,
    name: "facebook",
    icon: <FacebookIcon className="w-6 h-6" />,
    href: "#contact",
  },
  {
    id: 4,
    name: "telegram",
    icon: <TelegramIcon className="w-6 h-6" />,
    href: "/telegram.com",
  },
  {
    id: 5,
    name: "inst",
    icon: <InstagramIcon className="w-6 h-6" />,
    href: "/instagram.com",
  }
];

const Footer = () => {
  return (
    <footer className="w-full static bottom-0 h-10 text-lg">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption lg:block text-text-footer">© 2024. All rights reserved.</p>
        <ul className="flex gap-6 flex-wrap">
          {LinkFooter.map((link) => (
            <li key={link.id} className="hover:scale-110 transition-transform ">
              <Link to={link.href}>{link.icon}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
