import React from "react";
import logo from "../assets/images/logo.jpg";

const Logo = () => {
  return (
    <div>
      <a href="#">
        <img
          src={logo}
          className="object-fill"
          alt="web page Hrem Yevhenii"
          width={150}
          height={40}
        />
      </a>
    </div>
  );
};

export default Logo;
