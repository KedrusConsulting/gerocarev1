import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";

const navList = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "#", id: "services-menu" },
  { name: "Pricing", href: "/pricing" },
  { name: "Customer Stories", href: "/testimonials" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

const Navigation = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="navbar">
      <div className="row">
        <Logo />

        <div className={`navbar__grp ${openMenu ? "active" : ""}`}>
          <ul className="navbar__list">
            {navList.map((list) => (
              <li className="navbar__item" id={list.id ? list.id : ""}>
                <Link href={list.href} className="navbar__link">
                  {list.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <a href="/login" className="btn btn--sec">
              Log In
            </a>
            <a href="/register" className="btn btn--main">
              Get Started
            </a>
          </div>
        </div>

        <div
          className="navbar__menu"
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          {!openMenu ? (
            <Image
              src={require("@/assets/img/menu.svg")}
              alt="Mobile Menu icon"
            />
          ) : (
            <Image
              src={require("@/assets/img/menu-close.svg")}
              alt="Mobile Menu Close icon"
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
