import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [openDropDown, setOpenDropDown] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="row">
        <Logo />

        <div className={`navbar__grp ${openMenu ? "active" : ""}`}>
          <ul className="navbar__list">
            <li className="navbar__item">
              <Link href="/" className="navbar__link">
                Home
              </Link>
            </li>

            <li className="navbar__item">
              <Link href="/about" className="navbar__link">
                About Us
              </Link>
            </li>

            <li
              className={`navbar__item ${openDropDown ? "active" : ""}`}
              id="services"
              onClick={() => setOpenDropDown((prev) => !prev)}
            >
              <Link href="#" className="navbar__link">
                Services
              </Link>

              <ul className={`dropdown__list ${openDropDown ? "active" : ""}`}>
                <li className="dropdown__item">
                  <Link href="/elderly-care" className="dropdown__link">
                    Elderly Home Visit
                  </Link>
                </li>

                <li className="dropdown__item">
                  <Link href="/teleconsultation" className="dropdown__link">
                    Teleconsultation Doctor
                  </Link>
                </li>

                <li className="dropdown__item">
                  <Link href="/doctor-on-demand" className="dropdown__link">
                    Doctor On Demand
                  </Link>
                </li>

                <li className="dropdown__item">
                  <Link href="/care-giver" className="dropdown__link">
                    Care Givers
                  </Link>
                </li>

                <li className="dropdown__item">
                  <Link href="/hmo" className="dropdown__link">
                    HMO Plans
                  </Link>
                </li>
              </ul>
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
          </ul>

          <div className="navbar__actions">
            <a href="/login" className="btn btn--sec">
              Log In
            </a>
            <a href="/doctors-registration" className="btn btn--main">
              Register as a doctor
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
