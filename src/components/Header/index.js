import React from "react";

const Header = ({ children, className }) => {
  return (
    <header className={`header header--${className}`}>
      <div className="row">{children}</div>
    </header>
  );
};

export default Header;
