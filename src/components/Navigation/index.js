import React from 'react';
import Logo from '../Logo';

const navList = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "#" },
  { name: "Pricing", href: "/pricing" },
  { name: "Customer Stories", href: "/testimonials" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
]

const Navigation = () => {
  return (
    <nav className='navbar'>
      <div className="row">
        <Logo />

        <div className='navbar__grp'>
          <ul className='navbar__list'>
            {navList.map((list) => (
              <li className='navbar__item'>
                <a href={list.href} className="navbar__link">{list.name}</a>
              </li>
            ))}
          </ul>

          <div className='navbar__actions'>
            <a href='/login' className='btn btn--sec'>Log In</a>
            <a href='/register' className='btn btn--main'>Get Started</a>
          </div>
        </div>

        <div className='navbar__menu'>&nbsp;</div>
      </div>
    </nav>
  )
}

export default Navigation;
