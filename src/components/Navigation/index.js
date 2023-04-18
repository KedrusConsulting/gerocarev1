import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const navList = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "#", id: "services-menu" },
  { name: "Pricing", href: "/pricing" },
  { name: "Customer Stories", href: "/testimonials" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

const Navigation = () => {
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

        <div className="navbar__grp">
          <ul className="navbar__list">
            {navList.map((list) => (
              <li
                className="navbar__item"
                id={list.id ? list.id : ""}
                onClick={list.id ? handleClick : ""}
              >
                <Link href={list.href} className="navbar__link">
                  {list.name}
                </Link>
              </li>
            ))}

            <Menu
              id="services-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
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

        <div className="navbar__menu">&nbsp;</div>
      </div>
    </nav>
  );
};

export default Navigation;
