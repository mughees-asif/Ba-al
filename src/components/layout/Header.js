import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-indigo-200 shadow">
    <div className="container flex text-blue-700 flex-col sm:flex-row justify-between items-center mx-auto py-2 px-8">
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4 text-black" href="#features">
          Features
        </AnchorLink>
        <AnchorLink className="px-4 text-black" href="#services">
          Services
        </AnchorLink>
        <AnchorLink className="px-4 text-black" href="#stats">
          Stats
        </AnchorLink>
        <AnchorLink className="px-4 text-black" href="#testimonials">
          Testimonials
        </AnchorLink>
      </div>
      <div className="hidden md:block items-center">
        <Button className="text-sm py-2 m-2">Login</Button>
        <Button className="text-sm py-2 m-2">Register</Button>
      </div>
    </div>
  </header>
);

export default Header;
