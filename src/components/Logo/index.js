import Image from 'next/image';
import React from 'react'
import logo_img from "@/assets/img/gerocare-logo@2x.png";

const Logo = () => {
  return (
    <a href='/' className='logo'>
      <Image src={logo_img} alt="Gerocare logo" className='logo__img' />
    </a>
  )
}

export default Logo;
