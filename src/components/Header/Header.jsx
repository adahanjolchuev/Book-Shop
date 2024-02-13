import React from "react";
import "./Header.scss";
import { IoSearch } from "react-icons/io5";
import { RiShoppingBasketLine } from "react-icons/ri";
const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <nav>
            <h1>Bookshop</h1>
            <a href="#">Categories</a>
            <a href="#">Recent</a>
            <a href="#">Books</a>
            <a href="#">About Us</a>
          </nav>
          <div className="header-btns">
            <button className="header-btn">
              <IoSearch />
            </button>
            <button className="header-btn-two">
              {" "}
              <RiShoppingBasketLine />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
