import { useState } from 'react';
import { HamburgerArrow } from 'react-animated-burgers'
import { Link } from "react-router-dom";
import "../styles/burger-menu.scss";

function BurgerMenu() {
  let [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={`burger-menu ${isMenuOpen ? "open-menu": "closed-menu"}`}>
      <HamburgerArrow
        className="hamburger-icon"
        isActive={isMenuOpen}
        toggleButton={() => setIsMenuOpen(prev => !prev)}
        buttonWidth={30}
      />
      {/* <br/>
      <br/>
      <br/> */}
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="daily-goal">
            Daily Goal
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default BurgerMenu;