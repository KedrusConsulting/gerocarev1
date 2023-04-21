import Image from "next/image";
import React from "react";
import Logo from "../Logo";

import image_url_1 from "@/assets/img/top-awards-2x.png";
import image_url_2 from "@/assets/img/top-awards2-2x.png";

const footerList = [
  {
    category: "Our Services",
    list: [
      { name: "Doctor on Demand", href: "/doctor-on-demand" },
      { name: "Elderly Home Visit", href: "/elderly-care" },
      { name: "Teleconsultation Doctor", href: "/teleconsultation" },
      { name: "Partner Services", href: "#" },
      { name: "Care Givers", href: "/care-giver" },
    ],
  },

  {
    category: "Quick Links",
    list: [
      { name: "Blogs", href: "#" },
      { name: "User Registration", href: "#" },
      { name: "Subscription Plan", href: "#" },
      { name: "Contact Geocare", href: "#" },
    ],
  },

  {
    category: "Payments Methods",
    list: [
      { name: "Blogs", href: "#" },
      { name: "User Registration", href: "#" },
      { name: "Subscription Plan", href: "#" },
      { name: "Contact Geocare", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row grid footer__grid">
        <div className="footer__summary">
          <Logo />

          <p className="footer__text">
            We provide regular physician home visits for the elderly to prevent
            deterioration in their health condition, maintain a healthy state
            and improve quality of life.
          </p>

          <div className="footer__awards">
            <p className="footer__subtitle">Top Awards</p>

            <div className="footer__award-b">
              <figure className="footer__award">
                <Image
                  src={image_url_1}
                  alt="Top 30 African Health Innovation"
                  className="footer__award-img"
                />
                <Image
                  src={image_url_2}
                  alt="Top 50 African Innovation"
                  className="footer__award-img"
                />
              </figure>
            </div>
          </div>
        </div>

        {footerList.map((list) => (
          <ul className="footer__list">
            <h6 className="heading heading--6">{list.category}</h6>

            {list.list.map((item) => (
              <li className="footer__item">
                <a href={item.href} className="footer__link">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        ))}

        {/* <div className="footer__copyright">
          <p>Copyright © 2023 Gerocare, All rights reserved.</p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
