import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <div className="navbar">
      {links.map((link, index) => (
        <a key={index} href={`#${link}`}>
          {link}
        </a>
      ))}
    </div>
  );
}

export default NavBar;
