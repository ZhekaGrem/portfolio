import React from 'react'



const LinkFooter = [
  {
    id: 1,
    name: "X",
    img: "X",
    href: "#contact",
  },
];


const Footer = () => {
  return (
    <footer className="w-full static bottom-0 h-10 text-lg">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption lg:block">© 2024. All rights reserved.</p>
        <ul className="flex gap-6 flex-wrap">
          <li>x</li>
          <li>tel</li>
          <li>inst</li>
          <li>linked</li>
          <li>upwork</li>
          <li>mail</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer