import React from "react";

const NavLink = ({ contentInView, title, onNavLinkClick }) => {
  const lowerCaseTitle = title.toLowerCase()
  return (
    <a
      onClick={() => onNavLinkClick()}
      className={`font-medium ${
        contentInView === title ? "text-red-300" : "text-secondary"
      } m-2 hover:text-red-400 cursor-pointer`}
    >
      {title}
    </a>
  );
};

export default NavLink;
