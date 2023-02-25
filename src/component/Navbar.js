import React from "react";
import MetaMaskAuth from "./MetaMaskAuth";

const Navbar = () => {
  return (
    <header className="flex flex-row justify-between px-10 py-4">
      <p className="text-white font-bold italic">Hello Goerli</p>
      <MetaMaskAuth />
    </header>
  );
};

export default Navbar;
