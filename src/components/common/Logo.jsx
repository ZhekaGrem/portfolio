import React from "react";
import logo from "../../assets/images/logo-2.webp";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="animate-pulse ">
      <Link href="#">
        <img
          src={logo}
          className="object-fill"
          alt="web page Hrem Yevhenii"
          width={120}
          height={40}
        />
      </Link>
    </div>
  );
};

export default Logo;
