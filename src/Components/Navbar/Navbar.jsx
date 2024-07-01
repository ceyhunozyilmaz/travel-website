import React, { useState } from "react";
import "./navbar.scss";

import { MdTravelExplore } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active, setActive] = useState("navBar");

  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const removeNav = () => {
    setActive("navBar");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <MdTravelExplore className="icon" />
              TatilBurda.
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Anasayfa
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Paketler
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Mağaza
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Hakkımızda
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Sayfalar
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Yeniler
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                İletişim
              </a>
            </li>

            <button className="btn">
              <a href="#">Şimdi Rezervasyon Yap</a>
            </button>
          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <IoIosCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
