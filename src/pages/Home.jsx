import React from "react";
import Foto from "../assets/images/foto.png"

const Home = () => {
  return (
    <>
      <section className="container section flex w-full items-start justify-between tablet:flex-col ">
        <div className="w-1/2  tablet:inline-block tablet:w-full">
          <img className="h-full w-full" src={Foto} alt="" width={450} height={450} />
        </div>
        <div className="flex w-1/2 flex-col items-center self-center tablet:w-full tablet:text-center">
          <h1>lorem1123123</h1>
        </div>
      </section>
    </>
  );
};

export default Home;
