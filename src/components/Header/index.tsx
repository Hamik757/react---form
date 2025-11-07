import React from "react";
import type { HeaderMenu, HeaderProps } from "./types";

const Header: React.FC<HeaderProps> = ({ title }) => {
  const headerMenu: HeaderMenu = ["Header", "About", "Contact"];
  const renderHeaderMenu = headerMenu.map((item: string) => {
    return <li key={item}>{item}</li>;
  });
  return (
    <div>
      <h1>{title}</h1>
      {renderHeaderMenu}
    </div>
  );
};

export default Header;
