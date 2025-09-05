import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="row">
        <Logo />

        <div className={`navbar__grp ${openMenu ? "active" : ""}`}>
          <ul className="navbar__list">
            <li className="navbar__item">
              <Link href="/about" className="navbar__link">
                About Us
              </Link>
            </li>

            <li className="navbar__item">
              <Link href="/pricing" className="navbar__link">
                Pricing
              </Link>
            </li>

            <li className="navbar__item">
              <Link href="/testimonials" className="navbar__link">
                Customer Stories
              </Link>
            </li>

            <li className="navbar__item">
              <Link
                href="https://blog.gerocare.org"
                target="_blank"
                className="navbar__link"
              >
                Blog
              </Link>
            </li>

            <li className="navbar__item">
              <Link href="/faqs" className="navbar__link">
                FAQs
              </Link>
            </li>
          </ul>

          <div className="navbar__actions">
            <a href="/login" className="btn btn--sec">
              Log In
            </a>

            <a href="/register" className="btn btn--main">
              Start Care PLan
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
